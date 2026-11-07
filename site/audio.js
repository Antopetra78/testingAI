import {frequency} from './core.js';
import {SampleBank} from './samples.js';
export class SoundEngine extends EventTarget {
  constructor(){super();this.context=null;this.volume=.55;this.voices=new Set();this.output=null;this.input=null;this.access=null;this.program=0;this.channel=0;this.muted=false;this.midiTimers=new Set();this.activeMidi=new Set();this.bank=new SampleBank();this.mode='samples';this.sampleStatus='idle';this.failedAt=0;}
  async ready({sampled=true}={}){if(!this.context){this.context=new (window.AudioContext||window.webkitAudioContext)({latencyHint:'interactive'});this.master=this.context.createGain();this.master.gain.value=this.volume;this.master.connect(this.context.destination);}if(this.context.state==='suspended')await this.context.resume();if(sampled&&this.mode==='samples'&&!this.output&&!this.bank.loaded.has(this.program)&&(!this.failedAt||Date.now()-this.failedAt>30000)){const program=this.program;this.sampleStatus='loading';this.dispatchEvent(new Event('soundstate'));try{await this.bank.load(this.context,program);if(this.program===program){this.sampleStatus='ready';this.failedAt=0;}}catch(error){if(this.program===program){this.sampleStatus='fallback';this.sampleError=error.message;this.failedAt=Date.now();}}this.dispatchEvent(new Event('soundstate'));}return this.context;}
  setVolume(value){this.volume=Number(value);if(this.master)this.master.gain.setTargetAtTime(this.volume,this.context.currentTime,.02);}
  note(note,duration=.5,delay=0,velocity=90,{internal=false}={}){
    if(this.muted||this.volume===0)return;
    const c=this.context;if(!c||c.state!=='running')return;
    if(this.output?.state==='connected'&&!internal){
      const out=this.output,ch=this.channel,start=performance.now()+delay*1000;
      try{out.send([0x90+ch,note,Math.max(1,Math.round(velocity*this.volume))],start);out.send([0x80+ch,note,0],start+duration*1000);this.activeMidi.add(`${ch}:${note}`);const timer=setTimeout(()=>{this.activeMidi.delete(`${ch}:${note}`);this.midiTimers.delete(timer);},(delay+duration)*1000+30);this.midiTimers.add(timer);return;}catch{this.output=null;this.changed();}
    }
    const sample=!internal&&this.mode==='samples'?this.bank.nearest(this.program,note):null;
    if(sample){const source=c.createBufferSource(),gain=c.createGain(),t=c.currentTime+delay;source.buffer=sample.buffer;source.playbackRate.value=2**((note-sample.note)/12);const length=Math.min(duration,sample.buffer.duration/source.playbackRate.value);const peak=.6*velocity/127;gain.gain.setValueAtTime(.0001,t);gain.gain.linearRampToValueAtTime(peak,t+Math.min(.006,length/4));gain.gain.setValueAtTime(peak,t+Math.max(.007,length-.045));gain.gain.linearRampToValueAtTime(.0001,t+length);source.connect(gain);gain.connect(this.master);const voice={stop:()=>source.stop()};this.voices.add(voice);source.onended=()=>{source.disconnect();gain.disconnect();this.voices.delete(voice);};source.start(t);source.stop(t+length+.01);return;}
    const gain=c.createGain(),osc=c.createOscillator(),overtone=c.createOscillator(),partial=c.createGain(),filter=c.createBiquadFilter();const t=c.currentTime+delay;
    // Modelli sintetici leggeri. I programmi MIDI esterni usano la banca del dispositivo.
    const timbres={
      0:{wave:'triangle',ratio:2,partial:.16,attack:.012,cutoff:2600},
      10:{wave:'sine',ratio:3.99,partial:.4,attack:.005,cutoff:9000},
      12:{wave:'sine',ratio:4,partial:.18,attack:.004,cutoff:3300},
      16:{wave:'sine',ratio:2,partial:.5,attack:.018,cutoff:5000,sustain:true},
      19:{wave:'triangle',ratio:3,partial:.35,attack:.04,cutoff:3200,sustain:true},
      24:{wave:'triangle',ratio:3,partial:.22,attack:.006,cutoff:1900},
      40:{wave:'sawtooth',ratio:2,partial:.1,attack:.08,cutoff:1600,sustain:true},
      73:{wave:'sine',ratio:2,partial:.07,attack:.045,cutoff:1700,sustain:true},
    };
    const timbre=internal?timbres[12]:(timbres[this.program]||timbres[0]);const attack=Math.min(timbre.attack,duration*.25),peak=.22*velocity/127;
    osc.type=timbre.wave;osc.frequency.value=frequency(note);overtone.type='sine';overtone.frequency.value=frequency(note)*timbre.ratio;partial.gain.value=timbre.partial;filter.type='lowpass';filter.frequency.value=timbre.cutoff;
    gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(peak,t+attack);if(timbre.sustain)gain.gain.setValueAtTime(peak*.8,t+Math.max(attack,duration-.07));gain.gain.exponentialRampToValueAtTime(.0001,t+duration);
    osc.connect(gain);overtone.connect(partial);partial.connect(gain);gain.connect(filter);filter.connect(this.master);const voice={osc,overtone,gain};this.voices.add(voice);osc.onended=()=>{gain.disconnect();partial.disconnect();filter.disconnect();this.voices.delete(voice);};osc.start(t);overtone.start(t);osc.stop(t+duration+.02);overtone.stop(t+duration+.02);
  }
  sequence(notes,step=.65,chord=false){notes.forEach((n,i)=>this.note(n,chord?.9:.45,chord?0:i*step));return chord?.95:notes.length*step;}
  click(delay=0,strong=false){this.note(strong?88:81,.055,delay,strong?110:70,{internal:true});}
  stop(){if(this.output){try{this.output.clear();for(const k of this.activeMidi){const [ch,n]=k.split(':').map(Number);this.output.send([0x80+ch,n,0]);}this.output.send([0xb0+this.channel,123,0]);this.output.send([0xb0+this.channel,120,0]);}catch{}}
    this.activeMidi.clear();for(const t of this.midiTimers)clearTimeout(t);this.midiTimers.clear();for(const v of this.voices){try{if(v.stop)v.stop();else{v.osc.stop();v.overtone.stop();}}catch{}}this.voices.clear();}
  setProgram(program){program=Number(program);if(!Number.isInteger(program)||program<0||program>127)throw new Error('Scegli un programma MIDI da 1 a 128.');this.program=program;this.failedAt=0;this.sampleStatus=this.bank.loaded.has(program)?'ready':'idle';if(this.output)this.output.send([0xc0+this.channel,this.program]);this.dispatchEvent(new Event('soundstate'));}
  async connectMIDI(){if(!navigator.requestMIDIAccess)throw new Error('Questo browser non offre Web MIDI. Prova un browser desktop compatibile; i suoni integrati restano disponibili.');this.access=await navigator.requestMIDIAccess({sysex:false});this.access.onstatechange=()=>{if(this.input?.state==='disconnected')this.selectInput('');if(this.output?.state==='disconnected'){this.stop();this.output=null;}this.changed();};this.changed();return this.access;}
  selectInput(id){if(this.input)this.input.onmidimessage=null;this.input=this.access?.inputs.get(id)||null;if(this.input)this.input.onmidimessage=e=>{const [status,note,velocity]=e.data;if((status&0xf0)===0x90&&velocity>0){this.dispatchEvent(new CustomEvent('note',{detail:{note,velocity}}));}};}
  selectOutput(id){this.stop();this.output=this.access?.outputs.get(id)||null;this.setProgram(this.program);this.changed();}
  changed(){this.dispatchEvent(new Event('devices'));}
  async devices(){if(!navigator.mediaDevices?.enumerateDevices)return [];return (await navigator.mediaDevices.enumerateDevices()).filter(d=>d.kind==='audiooutput');}
  async sink(id){await this.ready({sampled:false});if(!this.context.setSinkId)throw new Error('La scelta dell’uscita in questa pagina non è supportata. Seleziona la scheda nelle impostazioni audio del sistema operativo.');await this.context.setSinkId(id);}
}
