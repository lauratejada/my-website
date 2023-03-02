'use strict';

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        console.log(`Window height ${window.scrollY}`);
        header.classList.add('bg-dark');
    } else {
        header.classList.remove('bg-dark');
    }      
});
