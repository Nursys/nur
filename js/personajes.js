/* ================================================
   PERSONAJES.JS — Tarjetas + filtro + modal
   ================================================ */
(function(){
  const grid = document.getElementById('personajes-grid');
  const cats = document.getElementById('personajes-cats');
  if(!grid) return;
  const data = window.PERSONAJES_DATA || [];

  function group(p){
    if(/califa/i.test(p.role)) return 'Califas rectos';
    if(/esposa|hija/i.test(p.role)) return 'Familia del Profeta ﷺ';
    return 'Compañeros y compañeras';
  }
  const groups = ['Todos', ...Object.keys([...new Set(data.map(group))].reduce((a,g)=>(a[g]=1,a),{}))];

  let active = 'Todos';
  cats.innerHTML = groups.map(g =>
    `<button class="chip ${g===active?'active':''}" data-g="${g}">${g}</button>`
  ).join('');
  cats.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if(!b) return;
    active = b.getAttribute('data-g');
    cats.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === b));
    render();
  });

  function cardHtml(p){
    return `
    <div class="card persona-card reveal visible" data-filter-item="${p.name} ${p.role}" data-id="${p.name}" style="cursor:pointer">
      <div class="between">
        <span class="chip">${group(p)}</span>
        <span class="p-arabic" style="font-family:var(--font-arabic);color:var(--gold-soft);opacity:.6">${p.ar}</span>
      </div>
      <h3 style="margin-top:10px">${p.name}</h3>
      <p class="muted" style="font-size:0.85rem;margin-top:4px">${p.role}</p>
      <p class="dim" style="font-size:0.82rem;margin-top:8px">${p.desc.slice(0,150)}…</p>
      <span class="source" style="font-size:0.75rem">${p.auth}</span>
    </div>`;
  }

  function render(){
    const list = active === 'Todos' ? data : data.filter(p => group(p) === active);
    grid.innerHTML = list.map(cardHtml).join('');
  }
  render();

  grid.addEventListener('click', e => {
    const card = e.target.closest('.persona-card'); if(!card) return;
    const p = data.find(x => x.name === card.getAttribute('data-id')); if(!p) return;
    openModal(p.name, `
      <div style="text-align:center;padding:6px 0 14px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:1.4em;color:var(--gold-soft)">${p.ar}</div>
        <div style="font-weight:700">${p.name}</div>
        <span class="chip" style="margin-top:6px">${p.role}</span>
      </div>
      <p class="muted" style="margin-top:14px">${p.desc}</p>
      <div class="mt-4"><span class="source">Fuentes: ${p.auth}</span></div>
    `);
  });
})();