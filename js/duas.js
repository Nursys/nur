/* ================================================
   DUAS.JS — Biblioteca de duas
   ================================================ */
(function(){
  const grid = document.getElementById('duas-grid');
  const catBar = document.getElementById('dua-cats');
  if(!grid) return;
  const data = window.DUAS_DATA || [];
  let activeCat = 'all';

  const meta = window.DUAS_META || { cats: [] };
  (meta.cats||[]).forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = c;
    b.addEventListener('click', () => {
      catBar.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      activeCat = c;
      render();
    });
    catBar.appendChild(b);
  });

  function cardHtml(d){
    const fav = window.isFav('dua', d.id);
    return `
    <div class="card dua-card reveal visible" data-filter-item="${d.title} ${d.translation} ${d.arabic} ${d.cat}" data-id="${d.id}" id="dua-${d.id}" style="cursor:pointer">
      <div class="between">
        <span class="chip">${d.cat}</span>
        <button class="fav-btn ${fav?'active':''}" data-fav data-fav-type="dua" data-fav-id="${d.id}" data-fav-label="${d.title}" data-fav-extra="${d.cat}" aria-label="Favorito"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
      </div>
      <h3 style="margin-top:10px">${d.title}</h3>
      <div class="dua-arabic" style="margin-top:10px">${d.arabic}</div>
      <div class="dua-trans">${d.translation}</div>
      <div class="dua-source">${d.source} · ${d.ref.split('·')[0]}</div>
    </div>`;
  }

  function render(){
    let list = data;
    if(activeCat !== 'all') list = data.filter(d => d.cat === activeCat);
    grid.innerHTML = list.map(cardHtml).join('');
    requestAnimationFrame(() => grid.querySelectorAll('.dua-card').forEach(el => el.classList.add('visible')));
  }
  render();

  grid.addEventListener('click', e => {
    const card = e.target.closest('.dua-card');
    if(!card) return;
    if(e.target.closest('[data-fav]')) return;
    const d = data.find(x => x.id === card.getAttribute('data-id'));
    if(!d) return;
    openModal(d.title, `
      <div style="text-align:center;padding:6px 0 14px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:1.5em;color:var(--gold-soft);line-height:2">${d.arabic}</div>
      </div>
      <div style="margin-top:14px"><b>Transliteración</b><p class="muted" style="font-size:0.9rem">${d.trans}</p></div>
      <div style="margin-top:10px"><b>Traducción</b><p class="muted" style="font-size:0.92rem">${d.translation}</p></div>
      <div class="mt-4"><span class="source">Fuente: ${d.source} · ${d.ref}</span></div>
      <div class="flex mt-4">
        <button class="btn btn-ghost btn-sm" onclick="copyText('${d.arabic.replace(/'/g,"\\'").replace(/"/g,'&quot;')} · ${d.ref.split('·')[0]}')">Copiar</button>
      </div>
    `);
  });
})();