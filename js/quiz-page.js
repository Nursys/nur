/* ================================================
   QUIZ-PAGE.JS — Rellena los selectores del quiz
   ================================================ */
(function(){
  const cat = document.getElementById('quiz-cat');
  const lvl = document.getElementById('quiz-level');
  if(!cat) return;

  const meta = window.QUIZ_DATA || { categories: [], levels: [] };
  cat.innerHTML = '<option value="all">Todas las categorías</option>' +
    meta.categories.map(c => `<option value="${c}">${c}</option>`).join('');
  lvl.innerHTML = '<option value="all">Todos los niveles</option>' +
    meta.levels.map(l => `<option value="${l}">${l}</option>`).join('');
})();