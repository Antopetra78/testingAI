# Musical Training Lab 4.1

Una palestra musicale in italiano per ragazzi e adulti, dal primo approccio a esercizi intermedi. Grafica giocosa, responsive, senza dipendenze da installare per la pubblicazione.

## Prova in locale

Aprire un terminale nella cartella del progetto:

```sh
python3 -m http.server 8080 --directory site
```

Aprire http://localhost:8080. Non aprire `index.html` con doppio clic: moduli JavaScript, microfono e MIDI richiedono un server locale o HTTPS.

## Cosa comprende

- Orecchio: acuto, grave, uguale; intervalli con tre livelli.
- Ritmo: ascolto del modello, pause reali, quattro battiti di preparazione e confronto dei tocchi con un riferimento temporale fisso. Risposta da mouse, touch o spazio.
- Lettura: pentagramma in chiave di violino e, al livello 3, di basso; risposte anche MIDI.
- Teoria e armonia: dodici famiglie di domande su durate, alterazioni, scale, triadi e gradi.
- Melodia: memoria di frasi da 3 a 5 note; tastiera virtuale, computer o MIDI.
- Canto: analisi locale dell’altezza di una voce monofonica. Accetta la classe di nota in qualsiasi ottava. Nessuna registrazione o invio dell’audio.
- Studio creativo: tastiera cromatica e sequencer polifonico a 16 crome (2 battute di 4/4), tempo regolabile, file melodia importabili/esportabili.
- Diario con statistiche reali, livelli adattivi, backup JSON e CSV. Non sono presenti dati dimostrativi nei progressi.
- Account email/password e sincronizzazione di eventi immutabili tramite Supabase, da attivare con la procedura seguente.
- Cache offline dei file applicativi dopo la prima visita riuscita; account e sincronizzazione richiedono rete.

Le preferenze e le composizioni restano locali. Si sincronizzano risposte e sessioni, non audio o melodie. La sessione termina dopo il numero proposto di domande o dopo il tempo obiettivo, alla prima risposta successiva. Nessuna domanda viene interrotta da un timer.

## Pubblicazione su GitHub e Render

1. Crea il repository GitHub desiderato.
2. Carica il **contenuto di questa cartella**: `render.yaml`, `README.md`, `site/`, `supabase/`, `tests/`, `package.json`. Non aggiungere un livello di cartelle sopra questi file.
3. Su Render scegli **New → Static Site** e collega il repository.
4. Root Directory: vuoto. Build Command: `true`. Publish Directory: `site`.
5. Pubblica e apri l’URL HTTPS.

In alternativa, importa il repository come **Blueprint**: `render.yaml` contiene la configurazione del sito statico. Nessun backend o comando di avvio è richiesto su Render. Non occorrono rewrite, perché la navigazione usa il frammento `#`.

Il progetto è preparato per la pubblicazione, ma non è stato caricato su un repository né pubblicato su Render da questa sessione.

## Attivare gli account e i progressi online

1. Crea un progetto su [Supabase](https://supabase.com/dashboard).
2. Nel **SQL Editor**, esegui il contenuto di `supabase/schema.sql`. Questo crea una tabella con Row Level Security: gli utenti autenticati leggono e aggiungono soltanto eventi appartenenti al proprio account. Gli eventi non si modificano e i retry non li duplicano.
3. Nelle impostazioni API recupera **Project URL** e **publishable key** (oppure `anon` legacy).
4. Modifica `site/config.js` inserendo questi due valori. La configurazione è pubblica per definizione; **non inserire `service_role`, secret key o password del database**.
5. In **Authentication → Providers**, abilita Email/password. Mantieni la conferma email; configura l’invio email del tuo progetto per l’uso pubblico.
6. In **Authentication → URL Configuration**, imposta **Site URL** sull’indirizzo HTTPS Render effettivo. Aggiungi lo stesso indirizzo tra gli URL ammessi; per le prove locali puoi aggiungere `http://localhost:8080`.
7. Aggiorna il repository e attendi il deploy Render.
8. Nell’app apri **Account**, crea un utente, conferma l’email e accedi. La conferma torna al sito; l’accesso avviene poi con email/password.
9. Prova anche il recupero password: il link ricevuto apre l’area account e consente di impostarne una nuova.

Le variabili d’ambiente Render **non vengono iniettate** nel JavaScript statico. Modifica il file pubblico di configurazione. Se Supabase cambia password minima, adegua i vincoli dei moduli dell’app; l’app richiede almeno 10 caratteri.

### Come si sincronizzano i dati

Ogni risposta/sessione ha un UUID. L’app conserva immediatamente una copia locale separata per account; invia gli eventi con inserimenti idempotenti e riunisce quelli remoti per UUID. Gli eventi nuovi di due dispositivi non sovrascrivono quelli precedenti. Sincronizzazione all’accesso, dopo le risposte, al ritorno online/in primo piano e con il pulsante dedicato. Una sessione può restare incompleta: le risposte date sono comunque conservate.

Il profilo ospite resta distinto. **Importa progressi ospite** aggiunge esplicitamente quei dati all’account corrente. I file JSON v4 vengono aggiunti al profilo attivo, dopo conferma, senza duplicare gli eventi. I backup del precedente prototipo v3 non sono compatibili: conservarli separatamente; l’originale in Downloads non è stato modificato.

Per una verifica prima del rilascio pubblico: accedi con due utenti e controlla che ciascuno veda solo i propri eventi; usa due dispositivi sullo stesso account, completa prove offline e sincronizza; verifica email di conferma, recupero password e scadenza/rinnovo della sessione. Il servizio Supabase reale non era disponibile durante lo sviluppo: questi controlli vanno eseguiti sul proprio progetto.

## Libreria suoni e sfondi

Il pulsante con il nome dello strumento, nella barra superiore, apre la libreria senza uscire dall’esercizio. Offre ricerca in italiano e inglese, 16 famiglie, anteprima sonora e preferiti. La selezione e i preferiti restano sul dispositivo. Le impostazioni audio contengono anche l’elenco completo raggruppato. I numeri mostrati vanno da 1 a 128; i messaggi MIDI usano da 0 a 127. Sono i programmi melodici GM1, non tutti i banchi proprietari o i drum kit.

In modalità campionata serve la rete al primo utilizzo di ogni strumento. I campioni provengono dalla versione fissata di FluidR3_GM su GitHub; fino a 8 strumenti sono conservati nella cache e fino a 2 decodificati in memoria. Se i campioni non sono disponibili, lo stato indica l’uso temporaneo della sintesi leggera. Crediti e licenza sono in `SOUND-LICENSES.md` e nella libreria stessa. I campioni remoti non sono inclusi nello ZIP. La modalità synth non richiede questi download.

Le schede e le pagine degli esercizi hanno illustrazioni vettoriali tematiche: cuffie/onde, scale di note, mani, pentagramma, accordi, tastiera e microfono. Non suggeriscono la risposta e sono escluse dalla lettura assistita.

## Schede audio e MIDI

L’app distingue:

1. **Audio del browser:** catalogo completo dei 128 programmi melodici General MIDI, con campioni FluidR3_GM caricati su richiesta e riprodotti tramite Web Audio. È disponibile anche la sintesi leggera offline, con modelli timbrici approssimati. L’uscita segue il dispositivo predefinito del sistema; quando disponibile, `AudioContext.setSinkId` consente di scegliere una diversa uscita nelle impostazioni dell’app.
2. **Ingresso MIDI:** note da una tastiera riconosciuta dal sistema. Funziona in lettura, memoria melodica e studio. Un Note On con velocità zero non viene considerato un nuovo tasto.
3. **Uscita MIDI:** comandi di nota e programma verso un generatore sonoro hardware o software. Selezione di porta, canale e programma; pulsante di arresto delle note e ritorno ai suoni integrati quando una porta si disconnette.

Una normale scheda audio **non necessariamente contiene suoni MIDI**. Per usare quei suoni serve un sintetizzatore esposto come uscita MIDI; un software sul computer può richiedere un’apposita porta virtuale e un proprio instradamento. Il sito non installa driver e non accede a librerie sonore interne non esposte dal sistema. Non è possibile garantire ogni scheda e ogni browser.

Nel browser è necessario concedere il permesso MIDI premendo **Abilita MIDI**. Serve HTTPS o localhost. Se il browser non offre Web MIDI, l’app mantiene tastiera virtuale, tastiera del computer e suoni integrati. Nessuna richiesta SysEx. I click ritmici sono sempre interni per offrire un riferimento uniforme; l’uscita hardware può introdurre latenza, da verificare sul proprio setup. La selezione delle porte non viene salvata fra riavvii.

Il volume dell’app non controlla la manopola fisica dell’interfaccia. La selezione audio del browser non instrada il suono prodotto da un sintetizzatore MIDI esterno. I nomi General MIDI possono non corrispondere alla banca del dispositivo.

## Verifiche

Con Node.js 20 o superiore:

```sh
npm test
```

Non occorre `npm install`: i test utilizzano soltanto moduli standard Node. Le verifiche coprono generazione delle domande, timing ritmico con pause iniziali, rilevamento di segnali audio sintetici, livelli, pentagramma, backup, separazione dei profili, sincronizzazione simulata e gestione MIDI simulata.

Controllare anche a mano: uso touch e tastiera, audio reale, microfono e autorizzazioni, ingresso/uscita MIDI fisici, disconnessione di dispositivi, rete assente e account su Supabase. I test sui segnali non certificano il canto in ambienti rumorosi. Il programma offre esercizi di base e intermedi, non un curriculum esaustivo o una valutazione dell’attitudine musicale.

## Aggiornamenti e installazione

L’app usa un service worker senza forzare il riavvio durante gli esercizi. Chiudi tutte le schede e riapri per applicare un aggiornamento. Quando modifichi i file, incrementa `CACHE` in `site/sw.js`. L’installazione come PWA dipende dal browser e dal sistema; include icone SVG e PNG.

## File principali

- `site/app.js`: interfaccia e sessioni.
- `site/core.js`: domande, notazione e valutazione.
- `site/audio.js`: riproduzione campionata, sintesi Web Audio e Web MIDI.
- `site/instruments.js`, `site/sound-picker.js`: catalogo GM e scelta dei timbri.
- `site/samples.js`: caricamento, cache e decodifica dei campioni.
- `site/exercise-art.js`: illustrazioni degli esercizi.
- `site/cloud.js`: autenticazione, recupero e sincronizzazione via API Supabase.
- `site/store.js`: salvataggio per profilo e backup.
- `site/config.js`: configurazione pubblica Supabase.
- `supabase/schema.sql`: tabella e regole di accesso.

## Riferimenti tecnici

- [Render Static Sites](https://render.com/docs/static-sites)
- [Render Blueprint specification](https://render.com/docs/blueprint-spec)
- [Supabase password authentication](https://supabase.com/docs/guides/auth/passwords)
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Web MIDI](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)
- [AudioContext.setSinkId](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/setSinkId)

Le condizioni di utilizzo e le informative per il servizio pubblico vanno definite dal titolare in funzione della propria configurazione. L’app non include pubblicità, tracciamento esterno o caricamento di audio sul cloud.
