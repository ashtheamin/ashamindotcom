// Simple nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.setAttribute('aria-hidden', String(expanded));
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();