/* ================================================
   NAMES.JS — Página de los 99 Nombres
   ================================================ */
(function(){
  const grid = document.getElementById('names-grid');
  if(!grid) return;
  const data = window.NAMES_DATA || [];

  let filter = 'all';

  function cardHtml(n){
    const learned = window.isNameLearned(n.num);
    const fav = window.isFav('name', n.num);
    return `
    <div class="card name-card reveal visible" data-filter-item="${n.trans} ${n.meaning} ${n.expl} ${n.ar}" id="nombre-${n.num}" data-num="${n.num}">
      <div class="between">
        <span class="dim" style="font-size:0.75rem">${n.num}</span>
        <button class="fav-btn ${fav ? 'active' : ''}" data-fav data-fav-type="name" data-fav-id="${n.num}" data-fav-label="${n.trans}" data-fav-extra="${n.meaning}" aria-label="Favorito"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
      </div>
      <div class="nc-arabic">${n.ar}</div>
      <div class="nc-trans">${n.trans}</div>
      <div class="nc-meaning">${n.meaning}</div>
      <div class="nc-actions">
        <button class="mark-learned-btn ${learned ? 'done' : ''}" data-learn="${n.num}">${learned ? '✓ Aprendido' : 'Aprender'}</button>
      </div>
      <div class="nc-progress"></div>
    </div>`;
  }

  function render(){
    let list = data;
    if(filter === 'favs') list = data.filter(n => window.isFav('name', n.num));
    if(filter === 'learned') list = data.filter(n => window.isNameLearned(n.num));
    if(filter === 'pending') list = data.filter(n => !window.isNameLearned(n.num));
    grid.innerHTML = list.map(cardHtml).join('');
    // trigger reveal
    requestAnimationFrame(() => {
      grid.querySelectorAll('.name-card').forEach(c => c.classList.add('visible'));
    });
    updateCounts();
  }

  function updateCounts(){
    const countEl = document.getElementById('names-count');
    const prog = document.getElementById('names-progress');
    const n = window.learnedNamesCount();
    if(countEl) countEl.textContent = n + ' / 99 aprendidos';
    if(prog) prog.style.width = (n / 99 * 100) + '%';
  }

  /* Open modal on card click */
  grid.addEventListener('click', e => {
    const card = e.target.closest('.name-card');
    if(!card) return;
    if(e.target.closest('[data-fav]') || e.target.closest('[data-learn]')) return;
    const num = parseInt(card.getAttribute('data-num'),10);
    const name = data.find(x => x.num === num);
    if(!name) return;
    const learned = window.isNameLearned(num);
    openModal(name.trans, `
      <div style="text-align:center;padding:8px 0 18px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:2em;color:var(--gold-soft)">${name.ar}</div>
        <div style="font-weight:700;font-size:1.15rem;margin-top:6px">${name.trans}</div>
        <div class="gold" style="color:var(--gold);font-weight:600">«${name.meaning}»</div>
      </div>
      <div style="margin-top:16px">
        <h4 style="margin-bottom:6px">Explicación</h4>
        <p class="muted">${name.expl}</p>
      </div>
      <div style="margin-top:14px">
        <h4>Reflexión</h4>
        <p class="muted">${name.refl}</p>
      </div>
      <div class="mt-4"><span class="badge-info">Nombre ${name.num} del 99</span></div>
      <p class="dim" style="font-size:0.75rem;margin-top:12px">${window.NAMES_META.note}</p>
    `);
    const favBtn = document.getElementById('modal-fav');
    const learnBtn = document.getElementById('modal-learn');
    favBtn.textContent = window.isFav('name', num) ? '★ En favoritos' : '☆ Guardar favorito';
    learnBtn.textContent = learned ? '✓ Aprendido' : 'Marcar como aprendido';
    favBtn.onclick = () => {
      const active = window.toggleFav('name', num, name.trans, name.meaning);
      favBtn.textContent = active ? '★ En favoritos' : '☆ Guardar favorito';
      render();
    };
    learnBtn.onclick = () => {
      const done = window.markNameLearned(num, !learned);
      learnBtn.textContent = done ? '✓ Aprendido' : 'Marcar como aprendido';
      render();
      showToast(done ? '¡Has aprendido «' + name.trans + '»!' : 'Marcado como pendiente', 'success');
    };
  });

  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-learn]');
    if(btn){
      e.stopPropagation();
      const num = parseInt(btn.getAttribute('data-learn'),10);
      const cur = window.isNameLearned(num);
      const done = window.markNameLearned(num, !cur);
      btn.classList.toggle('done', done);
      btn.textContent = done ? '✓ Aprendido' : 'Aprender';
      updateCounts();
      showToast(done ? '¡Sigue así! Lo aprendiste.' : 'Marcado como pendiente', 'success');
    }
  });

  /* Tabs */
  document.querySelectorAll('[data-tab-group="names"] .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-tab-group="names"] .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.getAttribute('data-tab');
      render();
    });
  });

  document.getElementById('names-toggle-info').addEventListener('click', () => {
    openModal('Cómo usar esta página', `
      <p class="muted"><b>Buscar:</b> escribe para filtrar por transitación, significado, explicación o árabe.</p>
      <p class="muted mt-4"><b>Clasificar:</b> usa las pestañas para ver todos, favoritos, aprendidos o pendientes.</p>
      <p class="muted mt-4"><b>Favorito:</b> la estrella guarda el nombre en tu lista de favoritos.</p>
      <p class="muted mt-4"><b>Aprender:</b> marca los nombres que ya conoces para llevar tu progreso.</p>
      <p class="muted mt-4"><b>Detalle:</b> toca la tarjeta para ver la explicación completa y la reflexión.</p>
    `);
  });

  render();
})();