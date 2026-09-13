/* ================================================
   HISTORIA.JS — Línea del tiempo
   ================================================ */
(function(){
  const tl = document.getElementById('historia-timeline');
  if(!tl) return;
  const data = window.TIMELINE_DATA || [];

  tl.innerHTML = data.map((e, i) => `
    <div class="t-item">
      <div class="t-dot"></div>
      <div class="card t-card">
        <div class="between">
          <h3>${e.title}</h3>
          <span class="chip">${e.start} — ${e.end}</span>
        </div>
        <span class="source" style="font-size:0.8rem">${e.era}</span>
        <p class="muted" style="margin-top:8px">${e.desc}</p>
      </div>
    </div>
  `).join('');

  tl.querySelectorAll('.t-card').forEach((c, i) => {
    c.classList.add('reveal');
    setTimeout(() => c.classList.add('visible'), i * 90);
  });
})();