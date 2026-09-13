/* ================================================
   ORACION.JS — Guía interactiva de la oración
   ================================================ */
(function(){
  const content = document.getElementById('prayer-step-content');
  if(!content) return;

  const steps = [
    { n:1, name:"Intención", desc:"En el corazón, sin pronunciarla en voz alta necesariamente, te propones realizar la oración: 'Me dispongo a rezar esta oración obligatoria por Allah'.", ar:"", trans:"", trad:"", note:"La intención (niyyah) es condición esencial en todas las escuelas; se hace con el corazón." },
    { n:2, name:"Takbir de apertura", desc:"Elevas las manos a la altura de los hombros (u orejas) y dices el takbir.", ar:"اللَّهُ أَكْبَرُ", trans:"Allahu Akbar", trad:"Allah es más Grande", note:"Este takbir inicia la oración: es el 'takbirat al-ihram'. A partir de aquí no se habla hasta el salam." },
    { n:3, name:"Qiyam — de pie, recitación de Al-Fatihah", desc:"De pie, colocas la mano derecha sobre la izquierda y recitas Al-Fatihah, que comienza así:", ar:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", trans:"Bismillah ir-Rahman ir-Rahim", trad:"En el nombre de Allah, el Clemente, el Misericordioso", note:"Al-Fatihah es imprescindible en cada rak'ah: 'no hay oración para quien no la recita' (al-Bujari y Muslim). Después se recita otra sura." },
    { n:4, name:"Ruku' — la inclinación", desc:"Te inclinas apoyando las manos en las rodillas, con la espalda recta y la vista hacia el suelo.", ar:"سُبْحَانَ رَبِّيَ الْعَظِيمِ", trans:"Subhana Rabbiyal-'Azim", trad:"Glorificado sea mi Señor, el Magnífico", note:"Suele repetirse tres veces (mínimo una). Se busca la humildad y la concentración." },
    { n:5, name:"Levantarse del ruku'", desc:"Te levantas de la inclinación y te quedas un instante de pie.", ar:"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ", trans:"Sami' Allahu liman hamidah", trad:"Allah escucha a quien Le alaba", note:"Después se dice: 'Rabbana wa lakal-hamd' (Señor nuestro, a Ti la alabanza). La escuela malikí y otras mencionan variantes de alabanza." },
    { n:6, name:"Primera postración (sujud)", desc:"Te postras apoyando la frente, las manos, las rodillas y los pies en el suelo: el momento más cercano del siervo a su Señor.", ar:"سُبْحَانَ رَبِّيَ الْأَعْلَى", trans:"Subhana Rabbiyal-A'la", trad:"Glorificado sea mi Señor, el Altísimo", note:"En el sujud el Profeta ﷺ decía: 'El momento más cercano del siervo a su Señor es durante la postración' (Muslim). Es un buen momento para suplicar." },
    { n:7, name:"Sentarse entre las dos postraciones", desc:"Te sientas brevemente entre las postraciones, reposando sobre el pie izquierdo y manteniendo el derecho erguido.", ar:"رَبِّ اغْفِرْ لِي", trans:"Rabbi-ghfir li", trad:"Señor mío, perdóname", note:"Es de la Sunnah sentarse así en todas las escuelas, con pequeñas variantes de postura." },
    { n:8, name:"Segunda postración", desc:"Vuelves a postrarte igual que la primera, completando la rak'ah.", ar:"سُبْحَانَ رَبِّيَ الْأَعْلَى", trans:"Subhana Rabbiyal-A'la", trad:"Glorificado sea mi Señor, el Altísimo", note:"Al terminar, te levantas de pie para la siguiente rak'ah (repetir recitación) o pasas al tashahhud si es la última." },
    { n:9, name:"Tashahhud — la atestación", desc:"Te sientas y recitas el testimonio de unidad, según la narración de Ibn Mas'ud:", ar:"التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", trans:"At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh…", trad:"Los saludos, las oraciones y lo puro son para Allah…", note:"Texto recogido por al-Bujari y Muslim. Es el núcleo del último asiento." },
    { n:10, name:"Salawat sobre el Profeta ﷺ", desc:"Pides bendiciones y paz para el Profeta Muhammad ﷺ.", ar:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ", trans:"Allahumma salli 'ala Muhammad wa 'ala ali Muhammad kama sallayta 'ala Ibrahim…", trad:"Oh Allah, bendice a Muhammad y a la familia de Muhammad como bendijiste a Ibrahim…", note:"Esta forma (salat ibrahimiya) es la recitada comúnmente al final del tashahhud." },
    { n:11, name:"Súplica final", desc:"En el último asiento puedes pedir protección contra las pruebas y suplicar el bien del Más Allá.", ar:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ", trans:"Allahumma inni a'udhu bika min 'adhabil-qabr, wa min 'adhabi jahannam, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal", trad:"Oh Allah, me refugio en Ti del castigo del sepulcro…", note:"Es una súplica recomendada en el tashahhud (Muslim 588)." },
    { n:12, name:"Salam — el saludo final", desc:"Giras la cabeza hacia la derecha y luego hacia la izquierda, diciendo el saludo de paz, y con ello concluye la oración.", ar:"السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", trans:"As-salamu 'alaykum wa rahmatullah", trad:"La paz sea contigo y la misericordia de Allah", note:"Algunos relatos añaden 'wa barakatuh'. Tras el salam se recomiendan las alabanzas finales (tasbih, tahmid, takbir)." }
  ];

  let idx = 0;

  const stepLabel = document.getElementById('prayer-step-label');
  const prevBtn = document.getElementById('prayer-prev');
  const nextBtn = document.getElementById('prayer-next');
  const progress = document.getElementById('prayer-progress');

  function render(){
    const s = steps[idx];
    stepLabel.textContent = 'Paso ' + (idx+1) + ' / ' + steps.length;
    prevBtn.disabled = idx === 0;
    nextBtn.textContent = idx === steps.length - 1 ? 'Fin ✓' : 'Siguiente →';
    progress.style.width = ((idx+1) / steps.length * 100) + '%';

    let arHtml = '';
    if(s.ar) arHtml = '<div class="arabic" style="font-size:1.4rem;text-align:center;margin:14px 0 2px;color:var(--gold-soft)">' + s.ar + '</div>';
    let transHtml = '';
    if(s.trans) transHtml = '<div style="text-align:center;font-weight:600">' + s.trans + '</div>';
    let tradHtml = '';
    if(s.trad) tradHtml = '<div class="dim" style="text-align:center;font-size:0.85rem">“' + s.trad + '”</div>';

    content.innerHTML = `
      <div class="between mb-4">
        <h3 style="font-size:1.15rem">${s.name}</h3>
        <span class="chip active">Paso ${s.n}</span>
      </div>
      <p class="muted">${s.desc}</p>
      ${arHtml}
      <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:6px">${transHtml}${tradHtml}</div>
      ${s.note ? '<div class="callout amber mt-4" style="margin:16px 0 0"><div class="callout-ic">i</div><div><b>Nota</b><p style="font-size:0.86rem">' + s.note + '</p></div></div>' : ''}
    `;
  }

  prevBtn.addEventListener('click', () => { if(idx > 0){ idx--; render(); } });
  nextBtn.addEventListener('click', () => { if(idx < steps.length - 1){ idx++; render(); } });

  document.addEventListener('keydown', e => {
    if(!document.getElementById('prayer-guide')) return;
    if(document.body.classList.contains('reading-mode')) return;
    const t = (document.activeElement||{}).tagName;
    if(t === 'INPUT' || t === 'TEXTAREA') return;
    if(e.key === 'ArrowRight') nextBtn.click();
    if(e.key === 'ArrowLeft') prevBtn.click();
  });

  render();
})();