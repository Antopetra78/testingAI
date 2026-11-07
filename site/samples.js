import {INSTRUMENTS} from './instruments.js';
// FluidR3_GM, CC BY 3.0. Versione fissata: vedi SOUND-LICENSES.md.
export const SAMPLE_BASE='https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/044fab8e1456bfafc5776e86dfd6bb8697149aef/FluidR3_GM/';
const CACHE='mtl-gm-samples-v1';
export function sampleNote(name){const match=/^([A-G])([b#]?)(-?\d+)$/.exec(name);if(!match)return null;return (Number(match[3])+1)*12+({C:0,D:2,E:4,F:5,G:7,A:9,B:11}[match[1]])+(match[2]==='#'?1:match[2]==='b'?-1:0);}
export function parseSoundfont(text,slug){const marker=`MIDI.Soundfont.${slug} =`;const start=text.indexOf(marker);if(start<0)throw new Error('Formato della libreria non riconosciuto.');const from=text.indexOf('{',start+marker.length),to=text.lastIndexOf('}');if(from<0||to<from)throw new Error('Libreria incompleta.');const data=JSON.parse(text.slice(from,to+1).replace(/,\s*}/g,'}'));const entries=Object.entries(data).map(([key,value])=>[sampleNote(key),value]).filter(([note,value])=>Number.isInteger(note)&&note>=0&&note<=127&&typeof value==='string'&&value.startsWith('data:audio/mp3;base64,'));if(!entries.length)throw new Error('Nessun campione audio valido.');return entries.sort((a,b)=>a[0]-b[0]);}
export class SampleBank {
  constructor(){this.loaded=new Map();this.pending=new Map();}
  async load(context,program){if(this.loaded.has(program)){const value=this.loaded.get(program);this.loaded.delete(program);this.loaded.set(program,value);return value;}if(this.pending.has(program))return this.pending.get(program);const promise=this.fetchInstrument(context,program).finally(()=>this.pending.delete(program));this.pending.set(program,promise);return promise;}
  async fetchInstrument(context,program){const instrument=INSTRUMENTS[program];if(!instrument)throw new Error('Programma MIDI non valido.');const url=SAMPLE_BASE+instrument.slug+'-mp3.js';let cache,response;try{cache=await caches.open(CACHE);response=await cache.match(url);}catch{}
    if(!response){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);try{response=await fetch(url,{signal:controller.signal});if(!response.ok)throw new Error('Campioni non disponibili.');}finally{clearTimeout(timer);}}
    const copy=response.clone(),entries=parseSoundfont(await response.text(),instrument.slug);
    // Un campione ogni tre semitoni: massimo 1 semitono di trasposizione nella gamma.
    const chosen=entries.filter((_,i)=>i%3===0||i===entries.length-1);const decoded=[];
    for(let offset=0;offset<chosen.length;offset+=4){const group=await Promise.all(chosen.slice(offset,offset+4).map(async([note,data])=>{const binary=atob(data.slice(data.indexOf(',')+1));const bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));return [note,await context.decodeAudioData(bytes.buffer)];}));decoded.push(...group);}
    const buffers=new Map(decoded);this.loaded.set(program,buffers);while(this.loaded.size>2)this.loaded.delete(this.loaded.keys().next().value);
    if(cache){try{await cache.put(url,copy);const keys=await cache.keys();while(keys.length>8)await cache.delete(keys.shift());}catch{}}
    return buffers;
  }
  nearest(program,note){const samples=this.loaded.get(program);if(!samples)return null;let best=null;for(const [key,buffer] of samples)if(!best||Math.abs(key-note)<Math.abs(best.note-note))best={note:key,buffer};return best;}
}
