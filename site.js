const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const opened = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(opened)); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const viewer = document.querySelector('#image-viewer');
if (viewer) {
  const fullImage = viewer.querySelector('img');
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    fullImage.src = button.dataset.image;
    fullImage.alt = button.querySelector('img').alt;
    viewer.showModal();
  }));
  viewer.querySelector('.close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
}
