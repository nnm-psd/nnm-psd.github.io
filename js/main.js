/* ===========================================================
   MAIN INTERACTIONS
   - Light/dark theme toggle (persisted)
   - Subtle scroll-triggered reveal
   - Sticky header border, current-section highlight in the nav
   - External links open in a new tab (live apps can take ~30 s to wake)
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

  /* --- External links: new tab --- */
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* --- Sticky header: show its border once the page scrolls --- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Highlight the nav link of the section in view --- */
  const nav = document.querySelector('.main-nav');
  const navLinks = nav ? [...nav.querySelectorAll('a[href^="#"]')] : [];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  let currentIndex = -1;
  let pinned = false;   // a clicked link stays current until the visitor scrolls by hand
  const setCurrent = (index) => {
    if (index === currentIndex) return;
    currentIndex = index;
    navLinks.forEach((link, i) => {
      link.classList.toggle('is-current', i === index);
      if (i === index) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (index >= 0) nav.scrollTo({ left: navLinks[index].offsetLeft - nav.offsetLeft - 16, behavior: 'smooth' });
  };
  const updateCurrent = () => {
    if (pinned) return;
    // last section whose top has passed just under the sticky header; the final one at the page bottom
    const line = (header ? header.offsetHeight : 0) + 24;
    let index = -1;
    sections.forEach((section, i) => { if (section && section.getBoundingClientRect().top <= line) index = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) index = sections.length - 1;
    setCurrent(index);
  };
  if (navLinks.length) {
    navLinks.forEach((link, i) => link.addEventListener('click', () => { pinned = true; setCurrent(i); }));
    ['wheel', 'touchstart', 'keydown'].forEach(type =>
      window.addEventListener(type, () => { pinned = false; }, { passive: true }));
    window.addEventListener('scroll', updateCurrent, { passive: true });
    updateCurrent();
  }

});