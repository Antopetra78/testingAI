import test from 'node:test';
import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
globalThis.crypto??=webcrypto;
const memory=new Map();globalThis.localStorage={getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)};
const {ProgressStore}=await import('../site/store.js');
test('i progressi ospite e degli account non si mescolano',()=>{memory.clear();const store=new ProgressStore();const e=store.add({type:'answer',module:'ear',correct:true,score:100});store.scope('account-a');assert.equal(store.events.length,0);store.add({type:'answer',module:'reading',correct:false,score:0});store.scope('account-b');assert.equal(store.events.length,0);store.scope();assert.equal(store.events.length,1);assert.equal(store.events[0].id,e.id);assert.equal(store.guestEvents().length,1);});
test('backup: importazione duplicata e input corrotto',()=>{memory.clear();const s=new ProgressStore();s.add({type:'answer',module:'rhythm',correct:true,score:100});const backup=s.export();assert.equal(s.import(backup),0);assert.throws(()=>s.import('{broken'));assert.throws(()=>s.import(JSON.stringify({format:'musical-training-lab',version:4,events:[{id:'bad'}]})));assert.equal(s.events.length,1);});
test('spazio esaurito: si continua in memoria segnalando il mancato salvataggio',()=>{memory.clear();const s=new ProgressStore(),original=localStorage.setItem;localStorage.setItem=()=>{throw new Error('quota');};s.add({type:'answer',module:'ear',correct:true,score:100});assert.equal(s.available,false);assert.equal(s.events.length,1);localStorage.setItem=original;});
