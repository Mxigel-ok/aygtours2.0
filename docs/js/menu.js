const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
  document.body.classList.toggle('menu-open');
});
navUl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show');
    document.body.classList.remove('menu-open');
  });
});