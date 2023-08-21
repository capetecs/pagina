const menuIcon = document.querySelector('.menu-mobile-logo');
const mobileMenu = document.querySelector('.mobile-menu');
menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive')
}

