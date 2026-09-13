/* ================================================
   COMENZAR.JS — Ruta guiada de aprendizaje
   ================================================ */
(function(){
  const list = document.getElementById('course-list');
  const pbar = document.getElementById('comenzar-progress');
  const pctEl = document.getElementById('comenzar-pct');
  if(!list) return;

  const steps = [
    { step:1, title:"El mensaje esencial: el Tawhid", page:"nombres-allah.html", pagename:"Nombres de Allah", desc:"Comienza por el núcleo del mensaje: la unicidad de Allah (tawhid) y Sus hermosos nombres. Conoce al Señor antes de conocer las reglas.", time:"15 min", chip:"Primer paso" },
    { step:2, title:"El profeta Muhammad ﷺ", page:"profetas.html", pagename:"Profetas en el Corán", desc:"La segunda llave: la biografía del último Mensajero y los profetas anteriores como cadena del mismo mensaje.", time:"20 min", chip:"Vida del Profeta ﷺ" },
    { step:3, title:"La palabra de Allah: el Corán", page:"quran.html", pagename:"Corán", desc:"Descubre en qué consiste la revelación, sus temas y sus suras. Lee y escucha un poco cada día es el hábito que transforma.", time:"20 min", chip:"El Corán" },
    { step:4, title:"Las creencias del corazón (Iman)", page:"akhirah.html", pagename:"La vida después de la muerte", desc:"Fe en Allah, los ángeles, los libros, los mensajeros, el Día Final y el decreto. Entiende el marco de todo lo que practicas.", time:"15 min", chip:"Iman" },
    { step:5, title:"Las cinco prácticas: los pilares", page:"pilares.html", pagename:"Pilares del Islam", desc:"Shahada, salah, zakat, sawm y hajj: el resumen de la práctica esencial del musulmán.", time:"20 min", chip:"Pilares" },
    { step:6, title:"La oración en la práctica", page:"oracion.html", pagename:"Oración paso a paso", desc:"Aprende el wudu y la forma de la oración paso a paso. Es la práctica más repetida: merece la pena aprenderla bien desde el principio.", time:"30 min", chip:"Práctica" },
    { step:7, title:"Refuerza con el quiz", page:"quiz.html", pagename:"Quiz interactivo", desc:"Cierra la ruta poniendo a prueba lo aprendido. Cada intento guarda tu progreso y te orienta sobre qué repasar.", time:"10 min", chip:"Refuerzo" }
  ];

  function render(){
    pctEl.textContent = 'Curso: ' + window.courseStepCount() + ' de ' + steps.length + ' pasos completados';

    list.innerHTML = steps.map(s => {
      const done = window.isCourseStepDone(s.step);
      return `
      <div class="course-item card ${done ? 'done' : ''}" data-step="${s.step}">
        <span class="cs-num">${s.step}</span>
        <div class="course-item-body">
          <h3 style="margin:0">${s.title} ${done ? '<span class="badge-ok">Completado</span>' : ''}</h3>
          <p class="muted" style="margin:6px 0 10px;font-size:0.9rem">${s.desc}</p>
          <div class="flex">
            <span class="chip">${s.time}</span>
            <span class="chip">${s.chip}</span>
          </div>
        </div>
        <div class="course-item-actions">
          <a href="${s.page}" class="btn btn-gold btn-sm">Ir a la lección</a>
          <button class="btn btn-ghost btn-sm course-done">${done ? 'Desmarcar' : 'Marcar completado'}</button>
        </div>
      </div>`;
    }).join('');
    updateBar();
  }

  function updateBar(){
    pbar.style.width = Math.round(window.courseStepCount() / steps.length * 100) + '%';
  }

  list.addEventListener('click', e => {
    const btn = e.target.closest('.course-done');
    if(!btn) return;
    const item = btn.closest('.course-item');
    const step = parseInt(item.getAttribute('data-step'), 10);
    const nowDone = !window.isCourseStepDone(step);
    window.completeCourseStep(step);
    if(!nowDone){
      /* desmarcar: reverte */
      const p = window.progress();
      if(p.course) p.course = p.course.filter(x => x !== step);
      window.setLS('islam_progress', JSON.stringify(p));
    }
    showToast(nowDone ? 'Paso completado, sigue adelante' : 'Paso desmarcado', nowDone ? 'success' : '');
    render();
  });

  render();
})();