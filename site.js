(() => {
  const nav = document.querySelector('[data-navlinks]');
  const btn = document.querySelector('[data-menu-btn]');
  if (nav && btn) {
    btn.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', open ? 'false' : 'true');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach((a) => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (!href) return;
    const normalized = href === './' ? 'index.html' : href;
    if (normalized === path) a.setAttribute('aria-current', 'page');
  });
})();

