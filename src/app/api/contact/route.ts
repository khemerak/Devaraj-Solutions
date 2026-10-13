import { NextRequest,NextResponse } from 'next/server';
import { createHash } from 'node:crypto';
import { config } from '@/lib/config';
import { validateInquiry } from '@/lib/contact';
export const runtime='nodejs';
export async function POST(request:NextRequest){
 const reply=(message:string,status:number)=>NextResponse.json({message},{status});
 if(!config.contactReady)return reply('Online inquiries are currently unavailable.',503);
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply('Request origin is not permitted.',403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply('Use a JSON request.',415);
 try{
  const reader=request.body?.getReader();if(!reader)return reply('A message is required.',400);
  let size=0;const chunks:Uint8Array[]=[];while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>16000){await reader.cancel();return reply('Message is too large.',413);}chunks.push(value);}
  const data=validateInquiry(JSON.parse(Buffer.concat(chunks).toString('utf8')));if(!data)return reply('Please check your fields and provide a message of at least 10 characters.',400);
  if(data.website)return reply('This inquiry could not be accepted.',400);
  // Only trust IP headers supplied and overwritten by your reverse proxy.
  const ip=request.headers.get('x-forwarded-for')?.split(',')[0].trim()||'unknown';
  const key='contact:'+createHash('sha256').update(ip).digest('hex');
  const script="local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n";
  const rate=await fetch(process.env.UPSTASH_REDIS_REST_URL!,{method:'POST',headers:{Authorization:'Bearer '+process.env.UPSTASH_REDIS_REST_TOKEN,'Content-Type':'application/json'},body:JSON.stringify(['EVAL',script,1,key]),signal:AbortSignal.timeout(5000),cache:'no-store'});
  const rateResult=await rate.json();if(!rate.ok||typeof rateResult.result!=='number')return reply('Inquiries are temporarily unavailable.',503);if(rateResult.result>5)return reply('Too many inquiries. Please try again in 10 minutes.',429);
  const sent=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.CONTACT_FROM,to:[process.env.CONTACT_TO],reply_to:data.email,subject:'Website inquiry: '+data.subject,text:'Name: '+data.name+'\nEmail: '+data.email+'\nOrganization: '+data.company+'\nProduct: '+data.product+'\n\n'+data.message}),signal:AbortSignal.timeout(10000)});
  if(!sent.ok)return reply('Email delivery failed. Please try again later.',502);
  return reply('Your inquiry was accepted by our email provider. Thank you for getting in touch.',200);
 }catch{return reply('Your inquiry could not be processed. Please check your fields or try again later.',400);}
}
