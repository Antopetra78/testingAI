// General MIDI Level 1, programmi interni 0–127; numeri mostrati 1–128.
export const FAMILIES = ["Pianoforti", "Percussioni intonate", "Organi e fisarmoniche", "Chitarre", "Bassi", "Archi", "Ensemble e voci", "Ottoni", "Ance e sassofoni", "Flauti", "Synth lead", "Synth pad", "Effetti synth", "Strumenti del mondo", "Percussioni melodiche", "Effetti sonori"];
export const INSTRUMENTS = [
  {
    "program": 0,
    "slug": "acoustic_grand_piano",
    "name": "Pianoforte a coda",
    "family": 0
  },
  {
    "program": 1,
    "slug": "bright_acoustic_piano",
    "name": "Pianoforte brillante",
    "family": 0
  },
  {
    "program": 2,
    "slug": "electric_grand_piano",
    "name": "Pianoforte a coda elettrico",
    "family": 0
  },
  {
    "program": 3,
    "slug": "honkytonk_piano",
    "name": "Pianoforte honky-tonk",
    "family": 0
  },
  {
    "program": 4,
    "slug": "electric_piano_1",
    "name": "Piano elettrico 1",
    "family": 0
  },
  {
    "program": 5,
    "slug": "electric_piano_2",
    "name": "Piano elettrico 2",
    "family": 0
  },
  {
    "program": 6,
    "slug": "harpsichord",
    "name": "Clavicembalo",
    "family": 0
  },
  {
    "program": 7,
    "slug": "clavinet",
    "name": "Clavinet",
    "family": 0
  },
  {
    "program": 8,
    "slug": "celesta",
    "name": "Celesta",
    "family": 1
  },
  {
    "program": 9,
    "slug": "glockenspiel",
    "name": "Glockenspiel",
    "family": 1
  },
  {
    "program": 10,
    "slug": "music_box",
    "name": "Carillon",
    "family": 1
  },
  {
    "program": 11,
    "slug": "vibraphone",
    "name": "Vibrafono",
    "family": 1
  },
  {
    "program": 12,
    "slug": "marimba",
    "name": "Marimba",
    "family": 1
  },
  {
    "program": 13,
    "slug": "xylophone",
    "name": "Xilofono",
    "family": 1
  },
  {
    "program": 14,
    "slug": "tubular_bells",
    "name": "Campane tubolari",
    "family": 1
  },
  {
    "program": 15,
    "slug": "dulcimer",
    "name": "Dulcimer",
    "family": 1
  },
  {
    "program": 16,
    "slug": "drawbar_organ",
    "name": "Organo a drawbar",
    "family": 2
  },
  {
    "program": 17,
    "slug": "percussive_organ",
    "name": "Organo percussivo",
    "family": 2
  },
  {
    "program": 18,
    "slug": "rock_organ",
    "name": "Organo rock",
    "family": 2
  },
  {
    "program": 19,
    "slug": "church_organ",
    "name": "Organo da chiesa",
    "family": 2
  },
  {
    "program": 20,
    "slug": "reed_organ",
    "name": "Organo ad ance",
    "family": 2
  },
  {
    "program": 21,
    "slug": "accordion",
    "name": "Fisarmonica",
    "family": 2
  },
  {
    "program": 22,
    "slug": "harmonica",
    "name": "Armonica a bocca",
    "family": 2
  },
  {
    "program": 23,
    "slug": "tango_accordion",
    "name": "Bandoneon",
    "family": 2
  },
  {
    "program": 24,
    "slug": "acoustic_guitar_nylon",
    "name": "Chitarra nylon",
    "family": 3
  },
  {
    "program": 25,
    "slug": "acoustic_guitar_steel",
    "name": "Chitarra acustica acciaio",
    "family": 3
  },
  {
    "program": 26,
    "slug": "electric_guitar_jazz",
    "name": "Chitarra jazz",
    "family": 3
  },
  {
    "program": 27,
    "slug": "electric_guitar_clean",
    "name": "Chitarra elettrica pulita",
    "family": 3
  },
  {
    "program": 28,
    "slug": "electric_guitar_muted",
    "name": "Chitarra elettrica stoppata",
    "family": 3
  },
  {
    "program": 29,
    "slug": "overdriven_guitar",
    "name": "Chitarra overdrive",
    "family": 3
  },
  {
    "program": 30,
    "slug": "distortion_guitar",
    "name": "Chitarra distorta",
    "family": 3
  },
  {
    "program": 31,
    "slug": "guitar_harmonics",
    "name": "Armonici di chitarra",
    "family": 3
  },
  {
    "program": 32,
    "slug": "acoustic_bass",
    "name": "Contrabbasso pizzicato",
    "family": 4
  },
  {
    "program": 33,
    "slug": "electric_bass_finger",
    "name": "Basso elettrico a dita",
    "family": 4
  },
  {
    "program": 34,
    "slug": "electric_bass_pick",
    "name": "Basso elettrico a plettro",
    "family": 4
  },
  {
    "program": 35,
    "slug": "fretless_bass",
    "name": "Basso fretless",
    "family": 4
  },
  {
    "program": 36,
    "slug": "slap_bass_1",
    "name": "Slap bass 1",
    "family": 4
  },
  {
    "program": 37,
    "slug": "slap_bass_2",
    "name": "Slap bass 2",
    "family": 4
  },
  {
    "program": 38,
    "slug": "synth_bass_1",
    "name": "Basso synth 1",
    "family": 4
  },
  {
    "program": 39,
    "slug": "synth_bass_2",
    "name": "Basso synth 2",
    "family": 4
  },
  {
    "program": 40,
    "slug": "violin",
    "name": "Violino",
    "family": 5
  },
  {
    "program": 41,
    "slug": "viola",
    "name": "Viola",
    "family": 5
  },
  {
    "program": 42,
    "slug": "cello",
    "name": "Violoncello",
    "family": 5
  },
  {
    "program": 43,
    "slug": "contrabass",
    "name": "Contrabbasso ad arco",
    "family": 5
  },
  {
    "program": 44,
    "slug": "tremolo_strings",
    "name": "Archi tremolo",
    "family": 5
  },
  {
    "program": 45,
    "slug": "pizzicato_strings",
    "name": "Archi pizzicato",
    "family": 5
  },
  {
    "program": 46,
    "slug": "orchestral_harp",
    "name": "Arpa orchestrale",
    "family": 5
  },
  {
    "program": 47,
    "slug": "timpani",
    "name": "Timpani",
    "family": 5
  },
  {
    "program": 48,
    "slug": "string_ensemble_1",
    "name": "Ensemble di archi 1",
    "family": 6
  },
  {
    "program": 49,
    "slug": "string_ensemble_2",
    "name": "Ensemble di archi 2",
    "family": 6
  },
  {
    "program": 50,
    "slug": "synth_strings_1",
    "name": "Archi synth 1",
    "family": 6
  },
  {
    "program": 51,
    "slug": "synth_strings_2",
    "name": "Archi synth 2",
    "family": 6
  },
  {
    "program": 52,
    "slug": "choir_aahs",
    "name": "Coro «Aah»",
    "family": 6
  },
  {
    "program": 53,
    "slug": "voice_oohs",
    "name": "Voci «Ooh»",
    "family": 6
  },
  {
    "program": 54,
    "slug": "synth_choir",
    "name": "Coro synth",
    "family": 6
  },
  {
    "program": 55,
    "slug": "orchestra_hit",
    "name": "Colpo d’orchestra",
    "family": 6
  },
  {
    "program": 56,
    "slug": "trumpet",
    "name": "Tromba",
    "family": 7
  },
  {
    "program": 57,
    "slug": "trombone",
    "name": "Trombone",
    "family": 7
  },
  {
    "program": 58,
    "slug": "tuba",
    "name": "Tuba",
    "family": 7
  },
  {
    "program": 59,
    "slug": "muted_trumpet",
    "name": "Tromba con sordina",
    "family": 7
  },
  {
    "program": 60,
    "slug": "french_horn",
    "name": "Corno francese",
    "family": 7
  },
  {
    "program": 61,
    "slug": "brass_section",
    "name": "Sezione di ottoni",
    "family": 7
  },
  {
    "program": 62,
    "slug": "synth_brass_1",
    "name": "Ottoni synth 1",
    "family": 7
  },
  {
    "program": 63,
    "slug": "synth_brass_2",
    "name": "Ottoni synth 2",
    "family": 7
  },
  {
    "program": 64,
    "slug": "soprano_sax",
    "name": "Sax soprano",
    "family": 8
  },
  {
    "program": 65,
    "slug": "alto_sax",
    "name": "Sax contralto",
    "family": 8
  },
  {
    "program": 66,
    "slug": "tenor_sax",
    "name": "Sax tenore",
    "family": 8
  },
  {
    "program": 67,
    "slug": "baritone_sax",
    "name": "Sax baritono",
    "family": 8
  },
  {
    "program": 68,
    "slug": "oboe",
    "name": "Oboe",
    "family": 8
  },
  {
    "program": 69,
    "slug": "english_horn",
    "name": "Corno inglese",
    "family": 8
  },
  {
    "program": 70,
    "slug": "bassoon",
    "name": "Fagotto",
    "family": 8
  },
  {
    "program": 71,
    "slug": "clarinet",
    "name": "Clarinetto",
    "family": 8
  },
  {
    "program": 72,
    "slug": "piccolo",
    "name": "Ottavino",
    "family": 9
  },
  {
    "program": 73,
    "slug": "flute",
    "name": "Flauto traverso",
    "family": 9
  },
  {
    "program": 74,
    "slug": "recorder",
    "name": "Flauto dolce",
    "family": 9
  },
  {
    "program": 75,
    "slug": "pan_flute",
    "name": "Flauto di Pan",
    "family": 9
  },
  {
    "program": 76,
    "slug": "blown_bottle",
    "name": "Soffio di bottiglia",
    "family": 9
  },
  {
    "program": 77,
    "slug": "shakuhachi",
    "name": "Shakuhachi",
    "family": 9
  },
  {
    "program": 78,
    "slug": "whistle",
    "name": "Fischio",
    "family": 9
  },
  {
    "program": 79,
    "slug": "ocarina",
    "name": "Ocarina",
    "family": 9
  },
  {
    "program": 80,
    "slug": "lead_1_square",
    "name": "Lead 1 · onda quadra",
    "family": 10
  },
  {
    "program": 81,
    "slug": "lead_2_sawtooth",
    "name": "Lead 2 · dente di sega",
    "family": 10
  },
  {
    "program": 82,
    "slug": "lead_3_calliope",
    "name": "Lead 3 · calliope",
    "family": 10
  },
  {
    "program": 83,
    "slug": "lead_4_chiff",
    "name": "Lead 4 · chiff",
    "family": 10
  },
  {
    "program": 84,
    "slug": "lead_5_charang",
    "name": "Lead 5 · charang",
    "family": 10
  },
  {
    "program": 85,
    "slug": "lead_6_voice",
    "name": "Lead 6 · voce",
    "family": 10
  },
  {
    "program": 86,
    "slug": "lead_7_fifths",
    "name": "Lead 7 · quinte",
    "family": 10
  },
  {
    "program": 87,
    "slug": "lead_8_bass__lead",
    "name": "Lead 8 · basso e lead",
    "family": 10
  },
  {
    "program": 88,
    "slug": "pad_1_new_age",
    "name": "Pad 1 · new age",
    "family": 11
  },
  {
    "program": 89,
    "slug": "pad_2_warm",
    "name": "Pad 2 · caldo",
    "family": 11
  },
  {
    "program": 90,
    "slug": "pad_3_polysynth",
    "name": "Pad 3 · polysynth",
    "family": 11
  },
  {
    "program": 91,
    "slug": "pad_4_choir",
    "name": "Pad 4 · coro",
    "family": 11
  },
  {
    "program": 92,
    "slug": "pad_5_bowed",
    "name": "Pad 5 · archi",
    "family": 11
  },
  {
    "program": 93,
    "slug": "pad_6_metallic",
    "name": "Pad 6 · metallico",
    "family": 11
  },
  {
    "program": 94,
    "slug": "pad_7_halo",
    "name": "Pad 7 · alone",
    "family": 11
  },
  {
    "program": 95,
    "slug": "pad_8_sweep",
    "name": "Pad 8 · sweep",
    "family": 11
  },
  {
    "program": 96,
    "slug": "fx_1_rain",
    "name": "FX 1 · pioggia",
    "family": 12
  },
  {
    "program": 97,
    "slug": "fx_2_soundtrack",
    "name": "FX 2 · colonna sonora",
    "family": 12
  },
  {
    "program": 98,
    "slug": "fx_3_crystal",
    "name": "FX 3 · cristallo",
    "family": 12
  },
  {
    "program": 99,
    "slug": "fx_4_atmosphere",
    "name": "FX 4 · atmosfera",
    "family": 12
  },
  {
    "program": 100,
    "slug": "fx_5_brightness",
    "name": "FX 5 · brillantezza",
    "family": 12
  },
  {
    "program": 101,
    "slug": "fx_6_goblins",
    "name": "FX 6 · goblin",
    "family": 12
  },
  {
    "program": 102,
    "slug": "fx_7_echoes",
    "name": "FX 7 · echi",
    "family": 12
  },
  {
    "program": 103,
    "slug": "fx_8_scifi",
    "name": "FX 8 · fantascienza",
    "family": 12
  },
  {
    "program": 104,
    "slug": "sitar",
    "name": "Sitar",
    "family": 13
  },
  {
    "program": 105,
    "slug": "banjo",
    "name": "Banjo",
    "family": 13
  },
  {
    "program": 106,
    "slug": "shamisen",
    "name": "Shamisen",
    "family": 13
  },
  {
    "program": 107,
    "slug": "koto",
    "name": "Koto",
    "family": 13
  },
  {
    "program": 108,
    "slug": "kalimba",
    "name": "Kalimba",
    "family": 13
  },
  {
    "program": 109,
    "slug": "bagpipe",
    "name": "Cornamusa",
    "family": 13
  },
  {
    "program": 110,
    "slug": "fiddle",
    "name": "Fiddle",
    "family": 13
  },
  {
    "program": 111,
    "slug": "shanai",
    "name": "Shanai",
    "family": 13
  },
  {
    "program": 112,
    "slug": "tinkle_bell",
    "name": "Campanellino",
    "family": 14
  },
  {
    "program": 113,
    "slug": "agogo",
    "name": "Agogô",
    "family": 14
  },
  {
    "program": 114,
    "slug": "steel_drums",
    "name": "Steel drums",
    "family": 14
  },
  {
    "program": 115,
    "slug": "woodblock",
    "name": "Woodblock",
    "family": 14
  },
  {
    "program": 116,
    "slug": "taiko_drum",
    "name": "Tamburo taiko",
    "family": 14
  },
  {
    "program": 117,
    "slug": "melodic_tom",
    "name": "Tom melodico",
    "family": 14
  },
  {
    "program": 118,
    "slug": "synth_drum",
    "name": "Tamburo synth",
    "family": 14
  },
  {
    "program": 119,
    "slug": "reverse_cymbal",
    "name": "Piatto rovesciato",
    "family": 14
  },
  {
    "program": 120,
    "slug": "guitar_fret_noise",
    "name": "Rumore delle corde",
    "family": 15
  },
  {
    "program": 121,
    "slug": "breath_noise",
    "name": "Soffio",
    "family": 15
  },
  {
    "program": 122,
    "slug": "seashore",
    "name": "Mare",
    "family": 15
  },
  {
    "program": 123,
    "slug": "bird_tweet",
    "name": "Cinguettio",
    "family": 15
  },
  {
    "program": 124,
    "slug": "telephone_ring",
    "name": "Telefono",
    "family": 15
  },
  {
    "program": 125,
    "slug": "helicopter",
    "name": "Elicottero",
    "family": 15
  },
  {
    "program": 126,
    "slug": "applause",
    "name": "Applausi",
    "family": 15
  },
  {
    "program": 127,
    "slug": "gunshot",
    "name": "Sparo",
    "family": 15
  }
];
export const instrumentName = program => INSTRUMENTS[program]?.name || INSTRUMENTS[0].name;
export function instrumentOptions(){return FAMILIES.map((f,i)=>`<optgroup label="${f}">${INSTRUMENTS.filter(p=>p.family===i).map(p=>`<option value="${p.program}">${p.program+1}. ${p.name}</option>`).join('')}</optgroup>`).join('');}
