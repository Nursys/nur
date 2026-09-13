/* ================================================
   FAVORITOS-PAGE.JS — Página de favoritos
   ================================================ */
(function(){
  const grid = document.getElementById('fav-grid');
  const empty = document.getElementById('fav-empty');
  const filters = document.getElementById('fav-filters');
  if(!grid) return;

  const typeLabels = {
    name:'Nombres de Allah', verse:'Versos del Corán', dua:'Duas',
    prophet:'Profetas', personaje:'Personajes', page:'Páginas', sura:'Suras'
  };

  let active = 'all';

  function render(){
    const all = window.getFavsList();
    const list = active === 'all' ? all : all.filter(f => f.type === active);
    empty.style.display = all.length === 0 ? '' : 'none';

    const types = ['all', ...Object.keys(all.reduce((a,f)=>(a[f.type]=1,a),{}))];
    if(types.length === 1){
      filters.style.display = 'none';
    } else {
      filters.style.display = '';
      filters.innerHTML = types.map(t =>
        `<button class="chip ${t===active?'active':''}" data-t="${t}">${t==='all' ? 'Todos' : typeLabels[t]||t}</button>`
      ).join('');
    }

    grid.innerHTML = list.length ? list.map(f => `
      <div class="card fav-item reveal visible" data-fav-type="${f.type}" data-fav-id="${f.id}">
        <div class="between">
          <span class="chip">${typeLabels[f.type] || f.type}</span>
          <button class="fav-btn active" data-fav data-fav-type="${f.type}" data-fav-id="${f.id}" data-fav-label="${f.label}" data-fav-extra="${f.extra}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
        </div>
        <h3 style="margin-top:10px;font-size:1.02rem">${f.label}</h3>
        ${f.extra ? '<p class="muted" style="font-size:0.85rem;margin-top:4px">'+f.extra+'</p>' : ''}
        <div class="mt-4"><a href="${linkFor(f)}" class="btn btn-ghost btn-sm">Abrir original</a></div>
      </div>
    `).join('') : '<p class="muted" style="text-align:center">No hay favoritos de este tipo todavía.</p>';
  }

  function linkFor(f){
    switch(f.type){
      case 'name': return 'nombres-allah.html';
      case 'verse': return 'quran.html';
      case 'sura': return 'quran.html';
      case 'dua': return 'duas.html';
      case 'prophet': return 'profetas.html';
      case 'personaje': return 'personajes.html';
      default: return 'favoritos.html';
    }
  }

  filters.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if(!b) return;
    active = b.getAttribute('data-t');
    filters.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === b));
    render();
  });

  window.addEventListener('favs-changed', render);
  render();
})();