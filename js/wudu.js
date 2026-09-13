/* ================================================
   WUDU.JS — Guía interactiva del wudu
   ================================================ */
(function(){
  const content = document.getElementById('wudu-step-content');
  const miniList = document.getElementById('wudu-mini-list');
  if(!content) return;

  const steps = [
    { n:1, name:"Intención", desc:"Con el corazón, te propones realizar el wudu para purificarte y poder rezar. La intención es condición en las escuelas que la exigen.", ar:"", note:"La niyyah se hace con el corazón; no hay fórmula obligatoria en voz alta." },
    { n:2, name:"Bismillah", desc:"Inicia el wudu pronunciando el nombre de Allah.", ar:"بِسْمِ اللَّهِ", trans:"Bismillah", trad:"En el nombre de Allah", note:"Recomendado por el interés de comenzar todo acto bueno con el nombre de Allah." },
    { n:3, name:"Manos", desc:"Lavas las manos tres veces, hasta las muñecas, empezando por la derecha.", ar:"", note:"Asegúrate de que el agua alcance entre los dedos." },
    { n:4, name:"Boca", desc:"Te enjuagas la boca con agua tres veces moviéndola suavemente.", ar:"", note:"Considerado sunnah por varias escuelas; la mayoría lo incluye en el wudu completo." },
    { n:5, name:"Nariz", desc:"Llevas agua a la nariz y exhalas; tres veces.", ar:"", note:"Aclarar la nariz es sunnah en la mayoría de las escuelas; introduce el agua con suavidad." },
    { n:6, name:"Rostro", desc:"Lavas toda la cara tres veces, desde donde nacen los cabellos hasta el mentón, y de oreja a oreja.", ar:"", note:"Parte obligatoria según Corán 5:6 ('lavad vuestras caras')." },
    { n:7, name:"Brazos", desc:"Lavas el brazo derecho hasta el codo, luego el izquierdo, tres veces cada uno.", ar:"", note:"Incluir los codos: el versículo dice 'las manos hasta los codos'." },
    { n:8, name:"Cabeza (masah)", desc:"Pasas las manos húmedas por toda la cabeza, desde la frente hacia atrás y de vuelta.", ar:"", note:"El masah de la cabeza es obligatorio (parte de 5:6 'pasad las manos por vuestras cabezas')." },
    { n:9, name:"Orejas", desc:"Pasas los dedos índices por dentro y los pulgares por detrás de las orejas.", ar:"", note:"Sunnah en la mayoría de las escuelas, siempre tras el masah de la cabeza." },
    { n:10, name:"Pies", desc:"Lavas el pie derecho hasta los tobillos y luego el izquierdo, tres veces cada uno.", ar:"", note:"Incluir los tobillos. Con esto queda completa la ablución. Es recomendable cerrar con la shahada y pedir que la purificación sea de los puros: 'Ash-hadu an la ilaha illallah…' (Muslim 234)." }
  ];

  let idx = 0;

  const stepLabel = document.getElementById('wudu-step-label');
  const prevBtn = document.getElementById('wudu-prev');
  const nextBtn = document.getElementById('wudu-next');
  const progress = document.getElementById('wudu-progress');

  function render(){
    const s = steps[idx];
    stepLabel.textContent = 'Paso ' + (idx+1) + ' / ' + steps.length;
    prevBtn.disabled = idx === 0;
    nextBtn.textContent = idx === steps.length - 1 ? 'Terminar ✓' : 'Siguiente →';
    progress.style.width = ((idx+1) / steps.length * 100) + '%';

    content.innerHTML = `
      <div class="between mb-4">
        <h3 style="font-size:1.15rem">${s.name}</h3>
        <span class="chip active">Paso ${s.n} de 10</span>
      </div>
      <p class="muted">${s.desc}</p>
      ${s.ar ? '<div class="arabic" style="font-size:1.4rem;text-align:center;margin:14px 0 2px;color:var(--gold-soft)">'+s.ar+'</div>' : ''}
      ${s.trans ? '<div style="text-align:center;font-weight:600">'+s.trans+'</div>' : ''}
      ${s.trad ? '<div class="dim" style="text-align:center;font-size:0.85rem">“'+s.trad+'”</div>' : ''}
      ${s.note ? '<div class="callout green mt-4"><div class="callout-ic">i</div><div><b>Nota</b><p style="font-size:0.86rem">'+s.note+'</p></div></div>' : ''}
    `;

    // Mini list
    miniList.innerHTML = steps.map((st, i) => {
      const state = i < idx ? 'done' : (i === idx ? 'active' : '');
      return `<div class="course-step ${state}">
        <span class="cs-num">${st.n}</span>${st.name}
        ${i < idx ? '<svg class="cs-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>' : ''}
      </div>`;
    }).join('');
  }

  prevBtn.addEventListener('click', () => { if(idx > 0){ idx--; render(); } });
  nextBtn.addEventListener('click', () => {
    if(idx < steps.length - 1){ idx++; render(); }
    else {
      const p = window.getLS('islam_wudu_done', 0);
      window.setLS('islam_wudu_done', 1);
      showToast('¡Wudu completado! Recuerda la shahada final', 'success');
    }
  });

  document.addEventListener('keydown', e => {
    if(!document.getElementById('wudu-step-content')) return;
    const t = (document.activeElement||{}).tagName;
    if(t === 'INPUT' || t === 'TEXTAREA') return;
    if(e.key === 'ArrowRight') nextBtn.click();
    if(e.key === 'ArrowLeft') prevBtn.click();
  });

  render();
})();