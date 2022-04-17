const hamburger = document.querySelector('.hamburger');
const openNav = document.querySelector('.main-navigation__list');

hamburger.addEventListener('click', () => {
  openNav.classList.toggle('show');
});
