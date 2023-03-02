'use strict';

const header = document.querySelector('header');
const sectionAbout = document.querySelector('#about');
const toggleButton = document.querySelector('.nav-3bar');
const toggleButtonB = document.querySelector('.nav-3bar .fa-bars');
const toggleButtonX = document.querySelector('.nav-3bar .fa-x');
const navMenu = document.querySelector('nav ul');
const menuElements = document.querySelector('nav ul li');
console.log(sectionAbout);
console.log(toggleButton);
console.log(navMenu);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        console.log(`Window height ${window.scrollY}`);
        header.classList.add('bg-dark');
    } else {
        header.classList.remove('bg-dark');
    }
});

toggleButtonB.addEventListener('click', () => {
    console.log(navMenu.className);
        navMenu.classList.add('show');
        navMenu.classList.add('bg-dark');
        navMenu.classList.add('show-menu-responsive');
       // menuElements.classList.add('show');
        toggleButtonB.classList.add('not-show');
        toggleButtonX.classList.remove('not-show');
});

toggleButtonX.addEventListener('click', () => {
    console.log(navMenu.className);
    if (navMenu.className = 'show') {
        navMenu.classList.remove('show');
        navMenu.classList.remove('bg-dark');
        navMenu.classList.remove('show-menu-responsive');
       // menuElements.classList.remove('show');
        //toggleButton.classList.remove('not-show');
        toggleButtonB.classList.remove('not-show');
        toggleButtonX.classList.add('not-show');
    }
});

navMenu.addEventListener('click', () => {
    if (navMenu.className = 'show') {
        navMenu.classList.remove('show');
        toggleButtonB.classList.remove('not-show');
        toggleButtonX.classList.add('not-show');
    }
});