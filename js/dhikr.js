/* ================================================
   DHIKR.JS — Contador de dhikr interactivo
   ================================================ */
(function(){
  const data = window.DHIKR_DATA || [];
  if(!data.length) return;

  const sel = document.getElementById('dhikr-select');
  const phraseEl = document.getElementById('dhikr-phrase');
  const arEl = document.getElementById('dhikr-arabic');
  const transEl = document.getElementById('dhikr-translation');
  const targetEl = document.getElementById('dhikr-target');
  const countEl = document.getElementById('dhikr-count');
  const totalEl = document.getElementById('dhikr-total');
  const sessionsEl = document.getElementById('dhikr-sessions');
  const statsEl = document.getElementById('dhikr-stats');
  const sourceEl = document.getElementById('dhikr-source');
  const btnPlus = document.getElementById('dhikr-plus');
  const btnReset = document.getElementById('dhikr-reset');
  const btnStats = document.getElementById('dhikr-stats-btn');
  const progressFill = document.getElementById('dhikr-progress-fill');

  let current = data[0];
  let count = 0;

  function loadSelector(){
    if(!sel) return;
    data.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = d.phrase;
      sel.appendChild(opt);
    });
  }
  loadSelector();

  function selectDhikr(id){
    current = data.find(x => x.id === id) || data[0];
    const saved = localStorage.getItem('dhikr_' + current.id);
    count = saved ? parseInt(saved,10) || 0 : 0;
    if(arEl) arEl.textContent = current.ar || '';
    if(transEl) transEl.textContent = current.trans || '';
    if(sourceEl) sourceEl.textContent = current.source || '';
    render();
  }

  function render(){
    if(phraseEl) phraseEl.textContent = current.phrase;
    if(targetEl) targetEl.textContent = 'Objetivo: ' + current.target;
    if(countEl) countEl.querySelector('b').textContent = count;
    const pct = Math.min(100, Math.round(count / current.target * 100));
    if(progressFill) progressFill.style.width = pct + '%';
    const totals = window.dhikrTotals();
    if(totalEl) totalEl.textContent = totals.total;
    if(sessionsEl) sessionsEl.textContent = totals.sessions;
    if(statsEl) statsEl.textContent = 'Sesiones completadas: ' + totals.sessions + ' · Total: ' + totals.total + ' recuerdos';
    if(btnPlus) btnPlus.disabled = count >= current.target;
  }

  function plus(){
    if(count >= current.target) return;
    count++;
    localStorage.setItem('dhikr_' + current.id, count);
    if(count === current.target){
      window.saveDhikrCount(current.id, count);
      showToast('Objetivo completado: ' + current.phrase, 'success');
    }
    if(btnPlus){
      btnPlus.style.transform = 'scale(0.9)';
      setTimeout(() => btnPlus.style.transform = '', 110);
    }
    render();
  }

  function reset(){
    if(count === 0) return;
    count = 0;
    localStorage.setItem('dhikr_' + current.id, '0');
    showToast('Contador reiniciado');
    render();
  }

  btnPlus.addEventListener('click', plus);
  btnReset.addEventListener('click', reset);
  if(sel) sel.addEventListener('change', () => selectDhikr(sel.value));
  if(btnStats) btnStats.addEventListener('click', () => {
    const t = window.dhikrTotals();
    openModal('Historial de dhikr', `
      <div class="kpi-row">
        <div class="kpi"><b>${t.total}</b><small>recuerdos</small></div>
        <div class="kpi"><b>${t.sessions}</b><small>sesiones completas</small></div>
        <div class="kpi"><b>${Object.keys((window.progress().dhikr)||{}).length}</b><small>adhkar usados</small></div>
      </div>
      <p class="muted mt-4" style="font-size:0.9rem">Tu historial se guarda localmente en este navegador. Cada vez que completas un objetivo se registra una sesión.</p>
    `);
  });

  /* Atajo de teclado: espacio = +1 */
  document.addEventListener('keydown', e => {
    if(e.code === 'Space' && document.getElementById('dhikr-plus')){
      const tag = (document.activeElement || {}).tagName;
      if(tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT' && !document.body.classList.contains('reading-mode')){
        e.preventDefault();
        plus();
      }
    }
  });

  selectDhikr(data[0].id);
})();