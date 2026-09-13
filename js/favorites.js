/* ================================================
   FAVORITES.JS — Sistema de favoritos con localStorage
   ================================================ */
(function(){
  const KEY = 'islam_favorites';

  function getFavs(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ return {}; } }
  function setFavs(f){ try { localStorage.setItem(KEY, JSON.stringify(f)); } catch(e){} window.dispatchEvent(new CustomEvent('favs-changed')); }

  function entry(type, id, label, extra){
    return { type, id, label, extra: extra || '', added: Date.now() };
  }

  window.isFav = function(type, id){
    const f = getFavs();
    return f[type] && f[type][id] ? true : false;
  };

  window.toggleFav = function(type, id, label, extra){
    const f = getFavs();
    if(!f[type]) f[type] = {};
    if(f[type][id]){ delete f[type][id]; showToast('Eliminado de favoritos'); return false; }
    f[type][id] = entry(type, id, label, extra);
    setFavs(f);
    showToast('Añadido a favoritos', 'success');
    return true;
  };

  window.getFavsList = function(){
    const f = getFavs();
    const out = [];
    Object.keys(f).forEach(type => {
      Object.keys(f[type]).forEach(id => out.push(f[type][id]));
    });
    return out.sort((a,b) => b.added - a.added);
  };

  window.removeFav = function(type, id){
    const f = getFavs();
    if(f[type] && f[type][id]){ delete f[type][id]; setFavs(f); }
  };

  /* Actualiza los botones de favorito presentes en la página */
  function refreshButtons(){
    document.querySelectorAll('[data-fav]').forEach(btn => {
      const type = btn.getAttribute('data-fav-type');
      const id = btn.getAttribute('data-fav-id');
      if(type && id) btn.classList.toggle('active', window.isFav(type, id));
    });
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-fav]');
    if(btn){
      const type = btn.getAttribute('data-fav-type') || 'item';
      const id = btn.getAttribute('data-fav-id');
      const label = btn.getAttribute('data-fav-label') || id;
      const extra = btn.getAttribute('data-fav-extra') || '';
      const active = window.toggleFav(type, id, label, extra);
      btn.classList.toggle('active', active);
      e.preventDefault();
      e.stopPropagation();
    }
  });

  window.addEventListener('favs-changed', refreshButtons);
  document.addEventListener('DOMContentLoaded', refreshButtons);
})();