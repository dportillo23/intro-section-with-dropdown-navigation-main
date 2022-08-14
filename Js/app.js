const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const hamburger = $('.hamburger');
const wrapper = $('.nav--wrapper');

hamburger.addEventListener('click', (e) => {
    const wrapperClasses = wrapper.classList
    wrapperClasses.toggle('active', !wrapperClasses.contains('active'));
    hamburger.src = !wrapperClasses.contains('active') ? 'images/icon-menu.svg' : 'images/icon-close-menu.svg'  
})

const arrows = $$('.arrow');

arrows.forEach(arrow => {
    arrow.addEventListener('click', e => {
        const subSectionClasses = e.target.parentElement.lastElementChild.classList
        subSectionClasses.toggle('expanded', !subSectionClasses.contains('expanded'));
        arrow.src = !subSectionClasses.contains('expanded') ? 'images/icon-arrow-down.svg' : 'images/icon-arrow-up.svg'  

    })
})
