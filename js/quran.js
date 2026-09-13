/* ================================================
   QURAN.JS — Página del Corán
   ================================================ */
(function(){
  const data = window.QURAN_DATA || {verses:[], surahs:[]};

  /* --- VERSOS POR TEMA --- */
  const catBar = document.getElementById('quran-cats');
  const versesBox = document.getElementById('quran-verses');
  let activeCat = 'all';

  if(catBar){
    (data.categories||[]).forEach(c => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.textContent = c;
      b.addEventListener('click', () => {
        catBar.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        activeCat = c;
        renderVerses();
      });
      catBar.appendChild(b);
    });
  }

  function verseCardHtml(v){
    const id = 'verso-' + v.suraNum + '-' + v.ayah;
    const fav = window.isFav('verse', id);
    return `
    <div class="verse-card reveal visible" id="${id}" data-filter-item="${v.sura} ${v.translation}">
      <div class="verse-arabic">${v.arabic}</div>
      <div class="verse-trans">${v.translation}</div>
      <div class="verse-ref">
        <span>${v.sura} · ${v.ayah}</span>
        <span class="chip" style="cursor:default">${v.category}</span>
      </div>
      <div class="flex mt-4" style="justify-content:flex-end;gap:6px">
        <button class="copy-inline" data-copy="${v.arabic} · (${v.sura} ${v.ayah})">Copiar</button>
        <button class="copy-inline" data-share="${v.sura} ${v.ayah}: ${v.translation}">Compartir</button>
        <button class="fav-btn ${fav?'active':''}" data-fav data-fav-type="verse" data-fav-id="${id}" data-fav-label="${v.sura} ${v.ayah}" data-fav-extra="${v.translation.slice(0,60)}..." aria-label="Favorito"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
      </div>
    </div>`;
  }

  function renderVerses(){
    if(!versesBox) return;
    const list = activeCat === 'all' ? data.verses : data.verses.filter(v => v.category === activeCat);
    versesBox.innerHTML = list.map(verseCardHtml).join('');
    requestAnimationFrame(() => versesBox.querySelectorAll('.verse-card').forEach(el => el.classList.add('visible')));
  }
  renderVerses();

  /* --- SURAS --- */
  function suraRowHtml(s){
    return `
    <div class="card sura-card reveal visible" data-filter-item="${s.name} ${s.es} ${s.arabic}">
      <span class="sura-num">${s.num}</span>
      <div class="sura-name"><b>${s.name}</b><small>${s.es}</small></div>
      <span class="sura-arabic" style="direction:rtl;font-family:var(--font-arabic);font-size:1.3rem;color:var(--gold-soft)">${s.arabic}</span>
      <div class="sura-verses"><span>${s.verses} aleyas</span></div>
    </div>`;
  }

  const surasBox = document.getElementById('suras-list');
  if(surasBox && data.surahs){
    surasBox.innerHTML = data.surahs.map(suraRowHtml).join('');
    requestAnimationFrame(() => surasBox.querySelectorAll('.sura-card').forEach(el => el.classList.add('visible')));
    surasBox.addEventListener('click', e => {
      const card = e.target.closest('.sura-card');
      if(card){ const name = card.querySelector('b').textContent; openModal(name, '<p class="muted">Esta es una selección educativa de versos. Para leer la sura completa con su traducción, consulta una Mushaf impreso o una aplicación reconocida de Corán (como las ediciones del Complejo del rey Fahd).</p>'); }
    });
  }

  /* --- COPIA Y COMPARTIR --- */
  document.addEventListener('click', e => {
    const copyBtn = e.target.closest('[data-copy]');
    if(copyBtn){
      window.copyText(copyBtn.getAttribute('data-copy'), 'Verso copiado');
      e.stopPropagation();
      return;
    }
    const shareBtn = e.target.closest('[data-share]');
    if(shareBtn){
      const text = shareBtn.getAttribute('data-share');
      if(navigator.share){ navigator.share({ text }).catch(()=>{}); }
      else { window.copyText(text, 'Texto copiado para compartir'); }
      return;
    }
  });

})();