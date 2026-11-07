// Illustrazioni vettoriali decorative: nessun indizio sulle risposte.
const drawings={
  ear:`<path d="M48 106V78a52 52 0 0 1 104 0v28"/><rect x="35" y="85" width="27" height="47" rx="13"/><rect x="138" y="85" width="27" height="47" rx="13"/><path d="M79 78v25m14-40v55m14-45v36m14-24v12"/>`,
  interval:`<path d="M28 135h42v-27h40V80h40V51h30"/><path d="M46 101V68l22-5v27m30-18V39l22-5v27m30-18V13l22-5v25"/><ellipse cx="39" cy="102" rx="9" ry="6"/><ellipse cx="91" cy="73" rx="9" ry="6"/><ellipse cx="143" cy="44" rx="9" ry="6"/>`,
  rhythm:`<path d="M50 133 29 92q-6-14 5-17 6-2 12 10l12 20-5-55q-1-13 9-14 10 0 11 13l5 40 2-52q0-13 10-13 11 0 10 14l-1 52 8-37q3-13 12-10 9 3 6 16l-9 48 17-16q10-9 17-1 7 7-1 16l-27 34"/><path d="m143 32 7-17m12 29 17-8m-35 25 18 2"/>`,
  reading:`<path d="M16 49h170M16 65h170M16 81h170M16 97h170M16 113h170"/><path d="M72 127V62l39-7v59m32-31V26"/><ellipse cx="61" cy="127" rx="13" ry="9"/><ellipse cx="100" cy="114" rx="13" ry="9"/><ellipse cx="132" cy="84" rx="13" ry="9"/>`,
  theory:`<circle cx="65" cy="56" r="32"/><circle cx="135" cy="56" r="32"/><circle cx="100" cy="116" r="32"/><path d="m91 72 18 31m-32 1 14-31m6-17h6"/><path d="M54 61v-9h13m56 9 11-13 11 13m-53 58 9-13 9 13"/>`,
  melody:`<rect x="23" y="65" width="158" height="72" rx="9"/><path d="M46 67v69m23-69v69m23-69v69m23-69v69m23-69v69m23-69v69M38 18l24 16 25-12 28 23 25-18 27 11"/><path d="m155 27 12 11-15 5"/><path d="M40 67v38m23-38v38m46-38v38m23-38v38m23-38v38" stroke-width="9"/>`,
  voice:`<rect x="76" y="18" width="48" height="80" rx="24"/><path d="M60 74v8a40 40 0 0 0 80 0v-8m-40 48v24m-24 0h48M40 40q-15 25 0 50m120-50q15 25 0 50M25 29q-24 36 0 72m150-72q24 36 0 72"/><path d="M91 44h18m-18 14h18m-18 14h18"/>`,
};
export function exerciseArt(id){return `<svg class="exercise-art" viewBox="0 0 200 165" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${drawings[id]||drawings.melody}</g><circle cx="177" cy="14" r="4" fill="currentColor"/><path d="m18 132 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="currentColor"/></svg>`;}
