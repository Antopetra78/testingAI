# Campioni audio General MIDI

L’app usa, su richiesta dell’utente, i campioni **FluidR3_GM** distribuiti dal progetto [MIDI.js Soundfonts di Benjamin Gleitz e collaboratori](https://github.com/gleitz/midi-js-soundfonts). Il soundfont originale Fluid è di Frank Wen e collaboratori. La distribuzione dichiara la licenza [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/).

Fonte originale del soundfont: [FluidR3_GM.sf2 su SynthFont](https://www.synthfont.com/soundfonts.html). I campioni MP3 sono conversioni del soundfont; l’app seleziona un campione ogni tre semitoni e applica trasposizione e inviluppo durante la riproduzione. Non viene eseguito il codice JavaScript del distributore: si estrae e si decodifica soltanto il dizionario di dati audio.

Versione fissata del repository: `044fab8e1456bfafc5776e86dfd6bb8697149aef`.

I campioni vengono recuperati da `raw.githubusercontent.com` al primo utilizzo di ciascun timbro, senza inviare registrazioni, account o progressi. La richiesta di rete espone al fornitore le normali informazioni di connessione. Fino a otto strumenti possono essere conservati nella cache del browser; fino a due strumenti decodificati restano in memoria. Cache e funzionamento offline dipendono dalla disponibilità di spazio e dalle politiche del browser.

La sintesi leggera inclusa nell’app è un’alternativa senza campioni esterni, con un numero ridotto di modelli timbrici approssimati. Un’uscita MIDI esterna usa invece i suoni del dispositivo o software selezionato, con i relativi diritti e caratteristiche.

Il catalogo segue i 128 programmi melodici **General MIDI Level 1**; non comprende banchi aggiuntivi proprietari, GM2/GS/XG o una libreria separata di drum kit. L’ordine del catalogo è quello del [General MIDI System Level 1](https://midi.org/general-midi-level-1). I numeri mostrati sono 1–128, i messaggi trasmessi sono 0–127. Sul canale 10 i dispositivi GM normalmente riproducono percussioni, quindi il programma scelto può non corrispondere allo strumento melodico.
