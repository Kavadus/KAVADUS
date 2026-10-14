const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('open', !expanded);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menú');
}));
document.getElementById('year').textContent = String(new Date().getFullYear());
