// amogujennifer.com: day/night toggle, scroll-in, footer year. That's all.
(function () {
  var root = document.documentElement;

  var btn = document.querySelector('.mode');
  if (btn) {
    var sync = function () {
      var night = root.getAttribute('data-theme') === 'night';
      btn.setAttribute('aria-label', night ? 'Switch to day mode' : 'Switch to night mode');
      btn.setAttribute('aria-pressed', night ? 'true' : 'false');
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', night ? '#121319' : '#F4EFE4');
    };
    sync();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'night' ? 'day' : 'night';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ja-mode', next); } catch (e) {}
      sync();
    });
  }

  var items = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
