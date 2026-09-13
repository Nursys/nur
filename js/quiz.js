/* ================================================
   QUIZ.JS — Motor del quiz interactivo
   ================================================ */
(function(){
  const app = document.getElementById('quiz-app');
  if(!app) return;

  const catSel = document.getElementById('quiz-cat');
  const levelSel = document.getElementById('quiz-level');
  const startBtn = document.getElementById('quiz-start');
  const quizArea = document.getElementById('quiz-area');

  let questions = [];
  let idx = 0;
  let score = 0;
  let answered = false;

  function shuffle(a){
    const arr = a.slice();
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startQuiz(){
    const cat = catSel.value;
    const lvl = levelSel.value;
    let pool = window.QUIZ_DATA.questions.filter(q => (cat === 'all' || q.cat === cat) && (lvl === 'all' || q.level === lvl));
    if(pool.length === 0){ showToast('No hay preguntas con ese filtro'); return; }
    questions = shuffle(pool).slice(0, 10);
    idx = 0; score = 0; answered = false;
    app.classList.add('hidden');
    quizArea.classList.remove('hidden');
    renderQuestion();
    window.scrollTo({top: quizArea.offsetTop - 80, behavior:'smooth'});
  }

  function renderQuestion(){
    const q = questions[idx];
    quizArea.innerHTML = '';

    const meta = document.createElement('div');
    meta.className = 'between mb-4';
    meta.innerHTML = '<span class="chip active">' + q.cat + '</span><span class="dim" style="font-size:0.85rem">Pregunta ' + (idx+1) + ' de ' + questions.length + '</span>';
    quizArea.appendChild(meta);

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '<h2 style="font-size:1.2rem;margin-bottom:18px">' + q.q + '</h2>';

    const letters = ['A','B','C','D','E'];
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:10px';
    q.options.forEach((opt, i) => {
      const b = document.createElement('button');
      b.className = 'quiz-option';
      b.innerHTML = '<span class="opt-letter">'+letters[i]+'</span><span>'+opt+'</span>';
      b.addEventListener('click', () => answer(i, b, wrap));
      wrap.appendChild(b);
    });
    card.appendChild(wrap);
    quizArea.appendChild(card);

    const progress = document.createElement('div');
    progress.className = 'progress-track mt-4';
    const fill = document.createElement('div');
    fill.className = 'progress-fill emerald';
    fill.style.width = (idx / questions.length * 100) + '%';
    progress.appendChild(fill);
    quizArea.appendChild(progress);
  }

  function answer(i, btn, wrap){
    if(answered) return;
    answered = true;
    const q = questions[idx];
    const opts = wrap.querySelectorAll('.quiz-option');
    opts.forEach(o => o.disabled = true);
    if(i === q.correct){
      btn.classList.add('correct');
      score++;
    } else {
      btn.classList.add('wrong');
      opts[q.correct].classList.add('correct');
    }
    const expl = document.createElement('div');
    expl.className = 'callout amber mt-4';
    expl.innerHTML = '<div class="callout-ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></div><div><b>' + (i === q.correct ? '¡Correcto!' : 'Incorrecto') + '</b><p>' + q.expl + '</p></div>';
    quizArea.appendChild(expl);

    const nav = document.createElement('div');
    nav.className = 'between mt-6';
    const isLast = idx + 1 >= questions.length;
    nav.innerHTML = '<button class="btn btn-ghost" id="q-prev">← Anterior</button><button class="btn btn-gold" id="q-next">' + (isLast ? 'Ver resultados' : 'Siguiente →') + '</button>';
    quizArea.appendChild(nav);

    nav.querySelector('#q-prev').addEventListener('click', () => {
      if(idx > 0){ idx--; answered = false; renderQuestion(); }
    });
    nav.querySelector('#q-next').addEventListener('click', () => {
      if(isLast){ finish(); } else { idx++; answered = false; renderQuestion(); window.scrollTo({top: quizArea.offsetTop - 80, behavior:'smooth'}); }
    });
  }

  function finish(){
    window.saveQuizResult(score, questions.length);
    const pct = Math.round(score / questions.length * 100);
    quizArea.innerHTML = '';
    quizArea.innerHTML = `
      <div class="card center" style="padding:44px 24px">
        <div style="margin:0 auto 18px;width:140px;height:140px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle,rgba(47,191,143,.14),transparent 70%);border:2px solid var(--border-strong)">
          <div>
            <div style="font-size:2.3rem;font-weight:800">${score}/${questions.length}</div>
            <div class="dim" style="font-size:0.78rem">correctas</div>
          </div>
        </div>
        <h2>${pct >= 80 ? '¡Excelente trabajo!' : pct >= 50 ? '¡Buen intento!' : 'Sigue practicando'}</h2>
        <p class="muted" style="max-width:440px;margin:10px auto 0">La meta no es la competencia, sino aprender y reforzar la fe. Revisa la explicación de cada pregunta para comprender mejor.</p>
        <div class="kpi-row mt-6" style="max-width:420px;margin:22px auto">
          <div class="kpi"><b>${score}</b><small>correctas</small></div>
          <div class="kpi"><b>${questions.length - score}</b><small>incorrectas</small></div>
          <div class="kpi"><b>${pct}%</b><small>acierto</small></div>
        </div>
        <div class="flex" style="justify-content:center;margin-top:18px">
          <button class="btn btn-gold" id="q-retry">Repetir quiz</button>
          <button class="btn btn-ghost" id="q-back">Cambiar filtros</button>
        </div>
      </div>`;
    quizArea.querySelector('#q-retry').addEventListener('click', () => { idx = 0; score = 0; answered = false; questions = shuffle(window.QUIZ_DATA.questions.filter(q => (catSel.value === 'all' || q.cat === catSel.value) && (levelSel.value === 'all' || q.level === levelSel.value))).slice(0,10); renderQuestion(); });
    quizArea.querySelector('#q-back').addEventListener('click', () => { quizArea.classList.add('hidden'); app.classList.remove('hidden'); });
    window.scrollTo({top: 0, behavior:'smooth'});
  }

  startBtn.addEventListener('click', startQuiz);
})();