/* ================================================
   CIENCIA.JS — Contribuciones científicas
   ================================================ */
(function(){
  const grid = document.getElementById('science-grid');
  const cats = document.getElementById('science-cats');
  if(!grid) return;
  const data = window.SCIENCE_DATA || [];
  const areas = ['Todos', ...Object.keys(data.reduce((a,d)=>(a[d.area]=1,a),{}))];

  let active = 'Todos';
  cats.innerHTML = areas.map(a =>
    `<button class="chip ${a===active?'active':''}" data-a="${a}">${a}</button>`
  ).join('');
  cats.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if(!b) return;
    active = b.getAttribute('data-a');
    cats.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === b));
    render();
  });

  function cardHtml(d){
    return `
    <div class="card science-card reveal visible" data-a="${d.area}" data-id="${d.figure}" style="cursor:pointer">
      <div class="between">
        <span class="chip">${d.area}</span>
        <span class="dim" style="font-size:0.72rem">${d.period}</span>
      </div>
      <div class="p-arabic" style="font-family:var(--font-arabic);color:var(--gold-soft);font-size:1.2em;margin-top:10px">${d.figureAr}</div>
      <h3>${d.figure}</h3>
      <p class="muted" style="font-size:0.85rem;margin-top:6px">${d.desc}</p>
      <span class="source" style="font-size:0.75rem">${d.refs}</span>
    </div>`;
  }

  function render(){
    const list = active === 'Todos' ? data : data.filter(d => d.area === active);
    grid.innerHTML = list.map(cardHtml).join('');
  }
  render();

  grid.addEventListener('click', e => {
    const card = e.target.closest('.science-card'); if(!card) return;
    const d = data.find(x => x.figure === card.getAttribute('data-id')); if(!d) return;
    openModal(d.figure, `
      <div style="text-align:center;padding:6px 0 14px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:1.4em;color:var(--gold-soft)">${d.figureAr}</div>
        <span class="chip" style="margin-top:6px">${d.area} · ${d.period}</span>
      </div>
      <div style="margin-top:14px"><b>Aportación</b><p class="muted" style="font-size:0.92rem">${d.desc}</p></div>
      <div style="margin-top:10px"><b>Contexto</b><p class="muted" style="font-size:0.92rem">${d.refs}</p></div>
    `);
  });
})();