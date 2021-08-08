"use strict"

let canAddClass = true;

window.addEventListener('scroll', () => {
    if (canAddClass && window.scrollY > 100) {
        const grd = document.querySelector('.gradient');
        grd.classList.add('gradient-active');
        canAddClass = false;
        console.log('Add');
    }
});

