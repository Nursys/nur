/* ================================================
   PROGRESS.JS — Sistema de progreso y estadísticas
   ================================================ */
(function(){
  const KEY = 'islam_progress';

  function get(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ return {}; } }
  function set(p){ try { localStorage.setItem(KEY, JSON.stringify(p)); } catch(e){} window.dispatchEvent(new CustomEvent('progress-changed')); }

  window.progress = get;

  /* Marcas una página como visitada */
  window.trackVisit = function(page){
    const p = get();
    if(!p.pages) p.pages = {};
    p.pages[page] = Date.now();
    set(p);
  };

  /* Nombres aprendidos */
  window.markNameLearned = function(num, done){
    const p = get();
    if(!p.names) p.names = [];
    p.names = p.names.filter(n => n !== num);
    if(done) p.names.push(num);
    set(p);
    return done;
  };

  window.isNameLearned = function(num){
    const p = get();
    return p.names && p.names.includes(num);
  };

  window.learnedNamesCount = function(){
    const p = get();
    return (p.names||[]).length;
  };

  /* Quiz */
  window.saveQuizResult = function(score, total){
    const p = get();
    if(!p.quiz) p.quiz = { attempts: 0, totalCorrect: 0, totalAsked: 0, best: 0 };
    p.quiz.attempts++;
    p.quiz.totalCorrect += score;
    p.quiz.totalAsked += total;
    p.quiz.best = Math.max(p.quiz.best, score);
    set(p);
  };

  /* Dhikr */
  window.saveDhikrCount = function(id, count){
    const p = get();
    if(!p.dhikr) p.dhikr = {};
    if(!p.dhikr[id]) p.dhikr[id] = { sessions: 0, total: 0 };
    p.dhikr[id].sessions++;
    p.dhikr[id].total += count;
    set(p);
  };

  window.dhikrTotals = function(){
    const p = get();
    let total = 0, sessions = 0;
    if(p.dhikr){ Object.keys(p.dhikr).forEach(k => { total += p.dhikr[k].total; sessions += p.dhikr[k].sessions; }); }
    return { total, sessions };
  };

  /* Curso (comenzar) */
  window.completeCourseStep = function(index){
    const p = get();
    if(!p.course) p.course = [];
    if(!p.course.includes(index)) p.course.push(index);
    set(p);
  };
  window.isCourseStepDone = function(index){
    const p = get();
    return p.course && p.course.includes(index);
  };
  window.courseStepCount = function(){
    const p = get();
    return (p.course||[]).length;
  };

  /* Ramadan checklist */
  window.getChecklist = function(){
    return localStorage.getItem('islam_checklist') ? JSON.parse(localStorage.getItem('islam_checklist')) : [];
  };
  window.toggleChecklist = function(id){
    let list = window.getChecklist();
    list = list.includes(id) ? list.filter(x => x !== id) : list.concat([id]);
    localStorage.setItem('islam_checklist', JSON.stringify(list));
    return list;
  };

  /* Última sección visitada */
  window.lastVisited = function(){
    const p = get();
    const pages = p.pages || {};
    const entries = Object.entries(pages).sort((a,b)=>b[1]-a[1]);
    return entries.length ? entries[0] : null;
  };

  /* Hoy empezamos a trackear la primera apertura */
  if(!get().firstVisit) set(Object.assign(get(), { firstVisit: Date.now() }));

  /* Página actual de track */
  document.addEventListener('DOMContentLoaded', () => {
    const current = location.pathname.split('/').pop() || 'index.html';
    window.trackVisit(current);
  });

})();