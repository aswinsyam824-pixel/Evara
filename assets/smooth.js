/* EVARA — Lenis smooth scroll (slow, rhythmic). Falls back to a built-in smoother if Lenis can't load. */
(function(){
  if (window.__evaraSmooth) return; window.__evaraSmooth = true;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  root.style.scrollBehavior = 'auto';
  var api = null;

  function dialogsOpen(){ return !!document.querySelector('dialog[open]'); }

  function startLenis(){
    var lenis = new window.Lenis({ lerp: 0.075, wheelMultiplier: 0.9, smoothWheel: true, syncTouch: false,
      prevent: function(el){ return el.closest && el.closest('dialog,[data-lenis-prevent],.mobile-nav'); } });
    function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    api = { to: function(y){ lenis.scrollTo(y, { duration: 1.6, easing: function(t){ return 1 - Math.pow(1 - t, 4); } }); },
            stop: function(){ lenis.stop(); }, start: function(){ lenis.start(); } };
  }

  function startFallback(){
    var target = scrollY, current = scrollY, running = false, ease = 0.075;
    function max(){ return root.scrollHeight - innerHeight; }
    function loop(){
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.4) { current = target; running = false; }
      scrollTo(0, current);
      if (running) requestAnimationFrame(loop);
    }
    function go(){ if (!running) { running = true; requestAnimationFrame(loop); } }
    addEventListener('wheel', function(e){
      if (e.ctrlKey || dialogsOpen()) return;
      if (e.target.closest && e.target.closest('[data-lenis-prevent],.mobile-nav,textarea,select')) return;
      e.preventDefault();
      var d = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? innerHeight : 1) * 0.9;
      if (!running) current = scrollY;
      target = Math.max(0, Math.min(max(), target + d)); go();
    }, { passive: false });
    addEventListener('scroll', function(){ if (!running) { target = current = scrollY; } }, { passive: true });
    api = { to: function(y){ current = scrollY; target = Math.max(0, Math.min(max(), y)); ease = 0.06; go(); setTimeout(function(){ ease = 0.075; }, 1800); },
            stop: function(){}, start: function(){} };
  }

  function init(){
    if (window.Lenis) startLenis(); else startFallback();
    /* smooth in-page anchor links (#work, #contact, …) */
    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return;
      var id = a.getAttribute('href'); if (id.length < 2) { e.preventDefault(); api.to(0); return; }
      var el = document.querySelector(id); if (!el) return;
      e.preventDefault(); api.to(el.getBoundingClientRect().top + scrollY - 20);
    });
    /* pause while a dialog (enquiry / project popup) is open */
    new MutationObserver(function(){ dialogsOpen() ? api.stop() : api.start(); })
      .observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });
  }

  if (window.Lenis) init();
  else {
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
    s.onload = init; s.onerror = init;
    var timer = setTimeout(function(){ s.onload = s.onerror = null; init(); }, 2500);
    s.onload = function(){ clearTimeout(timer); init(); }; s.onerror = function(){ clearTimeout(timer); init(); };
    document.head.appendChild(s);
  }
})();
