/* ================================================
   HOME.JS — Lógica de la homepage
   Dashboard, tarjeta del día, recomendaciones
   ================================================ */
(function(){

  /* --- DASHBOARD --- */
  function overallPct(){
    const p = window.progress();
    let pts = 0, max = 5;
    const names = (p.names||[]).length;
    pts += names / 99;
    const quiz = p.quiz || {};
    if(quiz.attempts) { pts += (quiz.totalCorrect / Math.max(1, quiz.totalAsked)); } else { max--; }
    const dhikr = (p.dhikr && Object.values(p.dhikr).length) ? 1 : 0; pts += dhikr;
    const course = (p.course||[]).length ? 1 : 0; pts += course;
    const pages = Object.keys(p.pages||{}).length ? 1 : 0; pts += pages;
    return Math.round(pts / max * 100);
  }

  function renderDashboard(){
    const pct = overallPct();
    const fill = document.getElementById('dash-progress-fill');
    const chip = document.getElementById('dash-pct-chip');
    if(fill) fill.style.width = pct + '%';
    if(chip) chip.textContent = pct + '%';

    // Stats
    const learned = document.getElementById('dash-learned');
    if(learned) learned.textContent = window.learnedNamesCount() + '/99';
    const dhikr = document.getElementById('dash-dhikr');
    if(dhikr) dhikr.textContent = window.dhikrTotals().total;
    const favs = document.getElementById('dash-favs');
    if(favs) favs.textContent = window.getFavsList().length;
    const quizRes = document.getElementById('dash-quiz');
    const q = window.progress().quiz;
    if(quizRes) quizRes.textContent = (q && q.attempts) ? q.best + '/' + Math.round(q.best / Math.max(1,(q.totalAsked/q.attempts)) * 100) + '%' : '—';

    // Recomendados basados en actividad
    const recBox = document.getElementById('dash-recommend');
    if(recBox){
      const p = window.progress();
      const recommended = [];
      if(window.learnedNamesCount() < 99) recommended.push({ href:'pages/nombres-allah.html', label:'Continúa los Nombres de Allah', desc: window.learnedNamesCount() + ' de 99 aprendidos' });
      if(!(p.quiz && p.quiz.attempts)) recommended.push({ href:'pages/quiz.html', label:'Prueba el quiz', desc:'Demuestra lo que sabes' });
      if(!(p.course||[]).length) recommended.push({ href:'pages/comenzar.html', label:'Haz la ruta guiada', desc:'Estudiante nuevo' });
      if(!(p.pages||{}).hasOwnProperty('pages/profetas.html')) recommended.push({ href:'pages/profetas.html', label:'Conoce a los profetas', desc:'Sus historias y enseñanzas' });
      recommended.push({ href:'pages/duas.html', label:'Explora las duas', desc:'Oración y súplica' });

      recommended.slice(0,4).forEach(r => {
        const a = document.createElement('a');
        a.href = r.href;
        a.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:10px;padding:11px 13px;border:1px solid var(--border);border-radius:11px;transition:border-color .2s';
        a.innerHTML = '<span><b style="font-size:0.88rem">'+r.label+'</b><br><small class="dim">'+r.desc+'</small></span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--gold)"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        a.addEventListener('mouseenter', () => a.style.borderColor = 'rgba(201,164,92,.5)');
        a.addEventListener('mouseleave', () => a.style.borderColor = 'var(--border)');
        recBox.appendChild(a);
      });
    }

    // Última sección visitada
    const last = window.lastVisited();
    if(last){
      const text = document.getElementById('dash-overall-text');
      const map = { 'index.html':'la página de inicio', 'pages/nombres-allah.html':'los Nombres de Allah', 'pages/profetas.html':'los Profetas', 'pages/quran.html':'el Corán', 'pages/oracion.html':'la Oración', 'pages/wudu.html':'el Wudu', 'pages/duas.html':'las Duas', 'pages/dhikr.html':'el Dhikr', 'pages/quiz.html':'el Quiz', 'pages/historia.html':'la Historia' };
      if(text) text.innerHTML = 'Tu última visita fue <b>' + (map[last[0]] || last[0]) + '</b>. Combinamos los nombres aprendidos, el quiz, el dhikr y el recorrido para calcular tu nivel general.';
    }
  }

  /* --- TARJETA DEL DÍA (rota cada visita) --- */
  function dailyContent(){
    const names = window.NAMES_DATA || [];
    const verses = (window.QURAN_DATA || {}).verses || [];
    const duas = window.DUAS_DATA || [];
    const seed = new Date().getDate();

    const name = names[seed % names.length];
    const nameEl = document.getElementById('daily-name-content');
    if(nameEl && name){
      nameEl.innerHTML =
        '<div class="arabic" style="font-size:1.7em">' + name.ar + '</div>' +
        '<div style="font-weight:700;margin-top:4px">' + name.trans + '</div>' +
        '<div class="muted">' + name.meaning + '</div>' +
        '<a href="pages/nombres-allah.html" class="card-link" style="justify-content:center">Todos los nombres</a>';
    }

    const verse = verses[seed % verses.length];
    const verseEl = document.getElementById('daily-verse-content');
    if(verseEl && verse){
      verseEl.innerHTML =
        '<div class="arabic" style="font-size:1.25em;text-align:center">' + verse.arabic + '</div>' +
        '<p class="muted" style="font-size:0.86rem;margin-top:10px;text-align:center">' + verse.translation + '</p>' +
        '<div style="text-align:center;margin-top:8px;font-weight:700;color:var(--gold);font-size:0.82rem">' + verse.sura + ' · ' + verse.ayah + '</div>';
    }

    const dua = duas[(seed * 3) % duas.length];
    const duaEl = document.getElementById('daily-dua-content');
    if(duaEl && dua){
      duaEl.innerHTML =
        '<div class="arabic" style="font-size:1.2em;text-align:center">' + dua.arabic + '</div>' +
        '<p class="muted" style="font-size:0.84rem;margin-top:8px;text-align:center">' + dua.translation + '</p>' +
        '<div style="text-align:center;margin-top:8px;color:var(--gold);font-size:0.78rem">' + dua.source + ' · ' + dua.ref.slice(0, 60) + '…</div>';
    }
  }

  /* --- MÓVIL: páginas recientes --- */
  function mobileRecent(){
    const box = document.getElementById('mobile-recent');
    if(!box) return;
    const p = window.progress();
    const pages = Object.entries(p.pages||{}).sort((a,b)=>b[1]-a[1]).slice(0,5);
    if(!pages.length){ box.style.display='none'; return; }
    let html = '<h4>Continuar donde lo dejaste</h4>';
    const labels = {
      'pages/nombres-allah.html':'Nombres de Allah',
      'pages/profetas.html':'Profetas',
      'pages/quran.html':'El Corán',
      'pages/oracion.html':'La Oración',
      'pages/wudu.html':'El Wudu',
      'pages/duas.html':'Duas',
      'pages/dhikr.html':'Dhikr',
      'pages/quiz.html':'Quiz',
      'pages/historia.html':'Historia'
    };
    pages.forEach(([page]) => { if(labels[page]) html += '<a href="'+page+'">'+labels[page]+'</a>'; });
    box.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    dailyContent();
    mobileRecent();
    window.addEventListener('progress-changed', renderDashboard);
    window.addEventListener('favs-changed', renderDashboard);
  });
})();