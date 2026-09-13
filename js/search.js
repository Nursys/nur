/* ================================================
   SEARCH.JS — Buscador global
   Busca en: nombres, profetas, versos, duas, términos
   ================================================ */
(function(){
  const input = document.querySelector('.search-panel input');
  const resultsBox = document.querySelector('.search-results');
  if(!input || !resultsBox) return;

  function pageOf(name){
    const inPages = location.pathname.indexOf('/pages/') !== -1 || /\/pages\/[^\/]+\.html$/.test(location.pathname);
    return (inPages ? '' : 'pages/') + name + '.html';
  }

  function norm(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }

  function build(){
    const q = norm(input.value.trim());
    const groups = [];
    if(q.length < 2){ resultsBox.innerHTML = '<div class="search-empty">Escribe al menos 2 letras para buscar contenido en toda la plataforma.</div>'; return; }

    const match = (t) => norm(t).includes(q);
    const matchAr = (a) => (a||'').includes(input.value.trim());

    /* Nombres de Allah */
    const names = (window.NAMES_DATA||[]).filter(n => match(n.trans) || match(n.meaning) || match(n.expl) || matchAr(n.ar));
    if(names.length) groups.push({ title:'Nombres de Allah', items: names.slice(0,5).map(n => ({ href: pageOf('nombres-allah')+'#nombre-'+n.num, label: n.trans + ' — ' + n.meaning, sub: 'Nombre '+n.num })) });

    /* Profetas */
    const prophets = (window.PROPHETS_DATA||[]).filter(p => match(p.name) || match(p.summary) || matchAr(p.ar));
    if(prophets.length) groups.push({ title:'Profetas', items: prophets.slice(0,5).map(p => ({ href: pageOf('profetas')+'#profeta-'+p.id, label: p.name, sub: p.title })) });

    /* Versos */
    const verses = (window.QURAN_DATA||{verses:[]}).verses.filter(v => match(v.sura) || match(v.translation) || matchAr(v.arabic));
    if(verses.length) groups.push({ title:'Versos del Corán', items: verses.slice(0,5).map(v => ({ href: pageOf('quran')+'#verso-'+v.suraNum+'-'+v.ayah, label: v.sura + ' ' + v.ayah, sub: v.translation.slice(0,70) + '…' })) });

    /* Duas */
    const duas = (window.DUAS_DATA||[]).filter(d => match(d.title) || match(d.translation) || matchAr(d.arabic) || match(d.cat));
    if(duas.length) groups.push({ title:'Duas', items: duas.slice(0,5).map(d => ({ href: pageOf('duas')+'#dua-'+d.id, label: d.title, sub: d.cat })) });

    /* Glosario */
    const terms = (window.GLOSSARY_DATA||[]).filter(t => match(t.term) || match(t.def) || matchAr(t.ar));
    if(terms.length) groups.push({ title:'Glosario', items: terms.slice(0,5).map(t => ({ href: pageOf('glosario')+'#term-'+t.term, label: t.term, sub: t.def.slice(0,70) + '…' })) });

    /* Páginas / Artículos */
    const articles = [
      { href: pageOf('pilares'), label: 'Los cinco pilares del Islam', sub: 'Shahada · Salah · Zakat · Sawm · Hajj' },
      { href: pageOf('oracion'), label: 'La oración (Salah)', sub: 'Guía paso a paso' },
      { href: pageOf('wudu'), label: 'El Wudu (ablución)', sub: 'Guía interactiva' },
      { href: pageOf('ramadan'), label: 'Ramadán', sub: 'Ayuno, Suhur, Iftar' },
      { href: pageOf('halal-haram'), label: 'Halal y Haram', sub: 'Conceptos y usos' },
      { href: pageOf('akhirah'), label: 'El Más Allá (Akhirah)', sub: 'Muerte, Juicio, Paraíso' },
      { href: pageOf('historia'), label: 'Historia del Islam', sub: 'Línea temporal' },
      { href: pageOf('ciencia'), label: 'Ciencia y civilización', sub: 'Aportes históricos' },
      { href: pageOf('personajes'), label: 'Personajes importantes', sub: 'Compañeros y figuras' },
      { href: pageOf('comenzar'), label: 'Empezar aquí', sub: 'Curso de introducción' },
      { href: pageOf('faq'), label: 'Preguntas frecuentes', sub: 'Respuestas claras' },
      { href: pageOf('quiz'), label: 'Quiz islámico', sub: 'Pon a prueba lo aprendido' }
    ].filter(a => match(a.label) || match(a.sub));
    if(articles.length && groups.length < 6) groups.push({ title:'Páginas', items: articles.slice(0,5) });

    if(!groups.length){
      resultsBox.innerHTML = '<div class="search-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><br>Sin resultados para "' + input.value + '"</div>';
      return;
    }

    let html = '';
    groups.forEach(g => {
      html += '<div class="search-result-group"><h4>' + g.title + '</h4>';
      g.items.forEach(it => {
        html += '<div class="search-result-item" data-href="'+it.href+'"><div><b>'+it.label+'</b><small>'+it.sub+'</small></div></div>';
      });
      html += '</div>';
    });
    resultsBox.innerHTML = html;
    resultsBox.querySelectorAll('.search-result-item').forEach(el => el.addEventListener('click', () => location.href = el.getAttribute('data-href')));
  }

  input.addEventListener('input', build);
  input.addEventListener('keydown', e => { if(e.key === 'Enter') build(); });

  /* Buscadores por página */
  document.querySelectorAll('[data-filter]').forEach(inputEl => {
    inputEl.addEventListener('input', () => {
      const target = inputEl.getAttribute('data-filter');
      const q = norm(inputEl.value);
      document.querySelectorAll('[data-filter-item]').forEach(card => {
        const text = norm(card.getAttribute('data-filter-item'));
        card.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    });
  });

})();