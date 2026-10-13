import test from 'node:test';import assert from 'node:assert/strict';import ts from 'typescript';import fs from 'node:fs';
// Execute the actual validator with the product catalog boundary stubbed.
const source=fs.readFileSync('src/lib/contact.ts','utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const testModule={exports:{}};new Function('require','exports',js)(()=>({products:[{id:'time'}]}),testModule.exports);const validate=testModule.exports.validateInquiry;
const valid={name:'Alex',email:'alex@example.test',company:'',product:'time',subject:'Product inquiry',message:'Please share information.',website:''};
test('valid inquiry is trimmed and accepted',()=>assert.equal(validate({...valid,name:' Alex '}).name,'Alex'));
test('rejects missing fields, invalid email, forged product, header injection, and oversized messages',()=>{for(const data of [{},null,{...valid,email:'invalid'},{...valid,product:'invented'},{...valid,subject:'Hello\r\nInjected'},{...valid,message:'x'.repeat(5001)},{...valid,message:'short'},{...valid,name:42}])assert.equal(validate(data),null);});
const configSource=fs.readFileSync('src/lib/config.ts','utf8');const configModule={exports:{}};new Function('exports','process',ts.transpileModule(configSource,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(configModule.exports,{env:{}});
test('URL configuration rejects unsafe and malformed URLs',()=>{const {httpUrl,config}=configModule.exports;assert.equal(httpUrl('javascript:alert(1)'),undefined);assert.equal(httpUrl('not a url'),undefined);assert.equal(httpUrl('https://example.test/'),'https://example.test');assert.equal(config.contactReady,false);assert.equal(config.siteUrl,undefined);});

