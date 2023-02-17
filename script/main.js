const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('#nav__menu');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('bx-x'); 
});