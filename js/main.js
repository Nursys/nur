/* ================================================
   MAIN.JS — Core: Theme, Toast, Modal, Navigation,
   Scroll reveal, Back to top, Utilities
   ================================================ */
(function(){
  const LS = window.localStorage;
  const getLS = (k,f) => { try { return JSON.parse(LS.getItem(k)) ?? f; } catch(e){ return f; } };
  const setLS = (k,v) => { try { LS.setItem(k, JSON.stringify(v)); } catch(e){} };

  /* --- THEME --- */
  const themeBtns = document.querySelectorAll('.theme-toggle, .theme-toggle-mobile');
  const stored = getLS('theme', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  if(stored === 'light') document.documentElement.setAttribute('data-theme','light');
  function toggleTheme(){
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'light' ? '' : 'light';
    next ? document.documentElement.setAttribute('data-theme', next) : document.documentElement.removeAttribute('data-theme');
    setLS('theme', next || 'dark');
  }
  themeBtns.forEach(b => b.addEventListener('click', toggleTheme));

  /* --- MOBILE MENU --- */
  const burgerBtn = document.querySelector('.menu-burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if(burgerBtn && mobileMenu){
    burgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  /* --- SEARCH --- */
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.search-panel input');
  const searchResultsBox = document.querySelector('.search-results');
  const searchTriggers = document.querySelectorAll('.open-search, [data-open-search]');

  function openSearch(){
    if(!searchOverlay) return;
    searchOverlay.classList.add('open');
    if(searchInput) { searchInput.value = ''; searchInput.focus(); }
    document.body.style.overflow = 'hidden';
  }
  function closeSearch(){
    if(!searchOverlay) return;
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  searchTriggers.forEach(el => el.addEventListener('click', e => { e.preventDefault(); openSearch(); }));
  if(searchOverlay) searchOverlay.addEventListener('click', e => { if(e.target === searchOverlay) closeSearch(); });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') closeSearch();
    if((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  /* --- TOAST --- */
  const toastWrap = document.createElement('div');
  toastWrap.className = 'toast-wrap';
  document.body.appendChild(toastWrap);
  window.showToast = function(msg, type){
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = (type === 'success' ? '<span class="toast-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg></span>' : '') + msg;
    toastWrap.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 2800);
  };

  /* --- MODAL --- */
  let modalOverlay = document.querySelector('.modal-overlay');
  if(!modalOverlay){
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = '<div class="modal"><div class="modal-head"><h3></h3><span class="modal-close" aria-label="Cerrar">&times;</span></div><div class="modal-body"></div></div>';
    document.body.appendChild(modalOverlay);
  }
  const modalBody = modalOverlay ? modalOverlay.querySelector('.modal-body') : null;
  const modalTitle = modalOverlay ? modalOverlay.querySelector('.modal-head h3') : null;
  const modalCloseBtn = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;

  window.openModal = function(title, html){
    if(!modalOverlay) return;
    if(modalTitle) modalTitle.textContent = title;
    if(modalBody) modalBody.innerHTML = html;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeModal = function(){
    if(!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  if(modalOverlay) modalOverlay.addEventListener('click', e => { if(e.target === modalOverlay) closeModal(); });
  if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  /* --- BACK TO TOP --- */
  const backTop = document.querySelector('.back-top');
  if(backTop){
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 400);
    }, {passive: true});
    backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  /* --- SCROLL REVEAL --- */
  const revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length && 'IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if(en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }});
    }, {rootMargin:'0px 0px -50px 0px'});
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* --- PROGRESS COUNTER ANIMATION --- */
  const counters = document.querySelectorAll('[data-count]');
  if(counters.length && 'IntersectionObserver' in window){
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if(en.isIntersecting){
          const el = en.target;
          const target = parseInt(el.getAttribute('data-count'),10);
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const iv = setInterval(() => {
            current += step;
            if(current >= target){ current = target; clearInterval(iv); }
            el.textContent = current;
          }, 28);
          cio.unobserve(el);
        }
      });
    }, {threshold: 0.5});
    counters.forEach(el => cio.observe(el));
  }

  /* --- ACTIVE NAV --- */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if(href && href.includes(currentPage) && currentPage !== ''){
      a.classList.add('active');
    }
  });

  /* --- ACCORDION --- */
  document.querySelectorAll('.acc-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const isOpen = item.classList.contains('open');
      item.closest('.accordion').querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
      if(!isOpen) item.classList.add('open');
    });
  });

  /* --- TABS --- */
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const btns = tabGroup.querySelectorAll('.tab-btn');
    const target = tabGroup.getAttribute('data-tab-group');
    const panels = target ? document.querySelectorAll('[data-tab="'+target+'"]') : [];
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-tab');
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        panels.forEach(p => { p.classList.toggle('active', p.getAttribute('data-tab-content') === id); });
      });
    });
  });

  /* --- COPY FUNCTIONALITY --- */
  window.copyText = function(text, successMsg){
    if(navigator.clipboard){ navigator.clipboard.writeText(text).then(() => showToast(successMsg || 'Copiado', 'success')); }
    else { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); showToast(successMsg || 'Copiado', 'success'); }
  };

  /* --- HELPERS --- */
  window.getLS = getLS;
  window.setLS = setLS;
  window.showToast = window.showToast;

  /* --- FADE-IN ON PAGE LOAD --- */
  const app = document.getElementById('app');
  if(app) app.style.animation = 'fadeIn 0.5s ease forwards';

})();