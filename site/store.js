import {mergeEvents,validEvent} from './core.js';
export class ProgressStore extends EventTarget {
  constructor(){super();this.owner='guest';this.events=[];this.available=true;this.load();}
  key(){return `mtl4-events:${this.owner}`;}
  load(){try{const rows=JSON.parse(localStorage.getItem(this.key())||'[]');this.events=Array.isArray(rows)?mergeEvents([],rows):[];}catch{this.events=[];this.available=false;}}
  scope(owner){this.owner=owner||'guest';this.load();this.dispatchEvent(new Event('change'));}
  persist(){try{localStorage.setItem(this.key(),JSON.stringify(this.events));this.available=true;}catch{this.available=false;}this.dispatchEvent(new Event('change'));}
  add(data){const e={...data,id:crypto.randomUUID(),at:new Date().toISOString()};if(!validEvent(e))throw new Error('Progresso non valido');this.events=mergeEvents(this.events,[e]);this.persist();return e;}
  merge(events){this.events=mergeEvents(this.events,events);this.persist();}
  export(){return JSON.stringify({format:'musical-training-lab',version:4,exportedAt:new Date().toISOString(),events:this.events},null,2);}
  import(raw){const data=JSON.parse(raw);if(data.format!=='musical-training-lab'||data.version!==4||!Array.isArray(data.events)||data.events.length>100000||!data.events.every(validEvent))throw new Error('Backup non valido. Scegli un backup JSON della versione 4.');const before=this.events.length;this.merge(data.events);return this.events.length-before;}
  guestEvents(){try{const e=JSON.parse(localStorage.getItem('mtl4-events:guest')||'[]');return Array.isArray(e)?mergeEvents([],e):[];}catch{return [];}}
}
