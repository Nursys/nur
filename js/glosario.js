/* ================================================
   GLOSARIO.JS — Diccionario interactivo
   ================================================ */
(function(){
  const grid = document.getElementById('glosario-grid');
  if(!grid) return;
  const data = window.GLOSSARY_DATA || [];

  function cardHtml(g){
    return `
    <div class="card glosario-item reveal visible" data-filter-item="${g.term} ${g.def} ${g.ar}" data-id="${g.term}" style="cursor:pointer">
      <div class="between">
        <h3 style="font-size:1rem">${g.term}</h3>
        <span class="p-arabic" style="font-family:var(--font-arabic);color:var(--gold-soft);font-size:1.15rem">${g.ar}</span>
      </div>
      <p class="muted" style="font-size:0.87rem;margin-top:6px">${g.def}</p>
    </div>`;
  }

  grid.innerHTML = data.map(cardHtml).join('');
  grid.querySelectorAll('.glosario-item').forEach(el => el.classList.add('visible'));

  grid.addEventListener('click', e => {
    const card = e.target.closest('.glosario-item'); if(!card) return;
    const g = data.find(x => x.term === card.getAttribute('data-id')); if(!g) return;
    openModal(g.term, `
      <div style="text-align:center;padding:6px 0 14px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:1.5em;color:var(--gold-soft)">${g.ar}</div>
        <div style="font-weight:700">${g.term}</div>
      </div>
      <p class="muted" style="margin-top:14px">${g.def}</p>
      <div class="mt-4"><span class="source">Término del glosario islámico</span></div>
    `);
  });
})();