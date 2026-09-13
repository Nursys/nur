/* ================================================
   PROPHETS.JS — Página de profetas
   ================================================ */
(function(){
  const grid = document.getElementById('prophets-grid');
  if(!grid) return;
  const data = window.PROPHETS_DATA || [];

  function badge(p){
    if(p.authenticity === 'quran') return '<span class="badge-info">Corán</span>';
    if(p.authenticity === 'tradicion') return '<span class="badge-warn">Tradición</span>';
    return '<span class="badge-info">Corán + Hadiz</span>';
  }

  function cardHtml(p){
    const fav = window.isFav('prophet', p.id);
    return `
    <div class="card prophet-card reveal visible" data-filter-item="${p.name} ${p.title} ${p.summary} ${p.ar}" id="profeta-${p.id}" data-id="${p.id}">
      <div class="between">
        <span class="p-name"><span>${p.name}</span><span class="p-arabic">${p.ar}</span></span>
        <button class="fav-btn ${fav?'active':''}" data-fav data-fav-type="prophet" data-fav-id="${p.id}" data-fav-label="${p.name}" data-fav-extra="${p.title}" aria-label="Favorito"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
      </div>
      <div class="p-roles">${badge(p)}</div>
      <p class="muted">${p.title}</p>
      <p style="margin-top:10px">${p.summary}</p>
      <span class="card-link">Leer su historia <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
    </div>`;
  }

  grid.innerHTML = data.map(cardHtml).join('');
  requestAnimationFrame(() => grid.querySelectorAll('.prophet-card').forEach(el => el.classList.add('visible')));

  grid.addEventListener('click', e => {
    if(e.target.closest('[data-fav]')) return;
    const card = e.target.closest('.prophet-card');
    if(!card) return;
    const p = data.find(x => x.id === card.getAttribute('data-id'));
    if(!p) return;

    let storyHtml = '';
    (p.story||[]).forEach(([t, ref, desc]) => {
      storyHtml += '<div style="margin-top:14px"><h4 style="font-size:0.95rem">' + t + '</h4><p class="muted" style="font-size:0.9rem">' + desc + '</p><span class="source">' + ref + '</span></div>';
    });

    let refsExtra = '';
    if(p.quranRefs && p.quranRefs.length){
      refsExtra += '<div class="mt-4"><h4 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:.1em;color:var(--gold)">Referencias coránicas</h4><p class="muted" style="font-size:0.88rem;margin-top:6px">' + p.quranRefs.join(' · ') + '</p></div>';
    }
    if(p.hadithNote) refsExtra += '<div class="callout green mt-4" style="margin:14px 0 0"><div class="callout-ic">✓</div><div><b>Nota de hadiz</b><p style="font-size:0.85rem">' + p.hadithNote + '</p></div></div>';
    if(p.authenticity === 'tradicion') refsExtra += '<div class="callout amber mt-4" style="margin:14px 0 0"><div class="callout-ic">!</div><div><b>Relato tradicional</b><p style="font-size:0.85rem">La historia de este profeta se apoya principalmente en la tradición exegética. No se presentan aún detalles dudosos como hechos.</p></div></div>';

    openModal(p.name, `
      <div style="text-align:center;padding:8px 0 16px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:1.8em;color:var(--gold-soft)">${p.ar}</div>
        <div style="font-weight:800;font-size:1.2rem;margin-top:4px">${p.name}</div>
        <div class="muted" style="font-size:0.88rem">${p.title} · ${p.time || ''}</div>
        <div class="flex" style="justify-content:center;margin-top:8px">${badge(p)}</div>
      </div>
      <div style="margin-top:16px">
        <h4>Su historia</h4>
        ${storyHtml}
      </div>
      <div class="mt-4"><h4 style="font-size:0.9rem;margin-bottom:6px">Enseñanzas</h4><p class="muted" style="font-size:0.92rem">${p.teachings}</p></div>
      ${refsExtra}
    `);
  });
})();