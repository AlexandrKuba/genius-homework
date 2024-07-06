const mobileMenu = document.querySelector('.mobile-menu');
const headerBurger = document.querySelector('.header__burger');
const menuBtnOpen = document.querySelector('.header__burger');
const menuBtnClose = document.querySelector('.header__burger');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleButger = () => headerBurger.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', toggleButger);
menuBtnClose.addEventListener('click', toggleButger);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
