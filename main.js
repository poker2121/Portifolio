let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


const handleScroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {

      navLinks.forEach(link => {
        link.classList.remove('active');
      });


      let correspondingNavLink = document.querySelector(`header nav a[href*='${id}']`);
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }
    }
  });
};


window.addEventListener('scroll', handleScroll);


menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});
