import { products } from '@/data/products';
export interface Inquiry { name: string; email: string; company: string; product: string; subject: string; message: string; website: string; }
export function validateInquiry(input: unknown): Inquiry | null {
 if (!input || typeof input !== 'object') return null;
 const data=input as Record<string,unknown>;
 const limits:Record<keyof Inquiry,number>={name:100,email:254,company:150,product:80,subject:200,message:5000,website:200};
 const result={} as Inquiry;
 for (const key of Object.keys(limits) as (keyof Inquiry)[]) { const raw=data[key] ?? ''; if(typeof raw !== 'string' || raw.length>limits[key] || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(raw))return null;result[key]=raw.trim(); }
 if(!result.name || !result.subject || result.message.length<10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email) || /[\r\n]/.test(result.email+result.subject+result.name) || !['general',...products.map(p=>p.id)].includes(result.product))return null;
 return result;
}
