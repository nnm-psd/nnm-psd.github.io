/* ===========================================================
   MAIN INTERACTIONS
   - Light/dark theme toggle (persisted)
   - Subtle scroll-triggered reveal
=========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Theme toggle --- */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      const dict = (window.translations && window.translations[root.lang]) || {};
      const label = theme === 'dark'
        ? (dict.nav && dict.nav.theme_light) || 'Light'
        : (dict.nav && dict.nav.theme_dark) || 'Dark';
      themeToggle.textContent = label;
    }
    try { localStorage.setItem('preferred-theme', theme); } catch (e) { /* ignore */ }
  }

  function initTheme() {
    let theme = 'light';
    try {
      const saved = localStorage.getItem('preferred-theme');
      if (saved) {
        theme = saved;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
      }
    } catch (e) { /* ignore */ }
    applyTheme(theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  initTheme();

  /* --- Subtle scroll reveal --- */
  const revealTargets = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

});