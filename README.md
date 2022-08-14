# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Mobile view](./screenshots/Mobile.png)
![Desktop view](./screenshots/Desktop.png)

### Links

- Repository URL: [Repository](https://github.com/dportillo23/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Demo page](https://dportillo23.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Below is the code to handle the dropdown menu in mobile version, including the transition setup.

CSS code to style mobile dropdown

```css
.sub__section {
    max-height: 0;
    height: fit-content;
    overflow: hidden;
    transition: max-height 500ms ease, margin 100ms ease 400ms, padding 0ms ease 300ms;
    padding-left: 1.5rem;
}

.sub__section.expanded {
    max-height: 200px;
    margin-top: 2rem;
    transition: max-height 500ms ease, margin 250ms ease 0ms;
}
```
Js function to handle dropdown

```js
const arrows = $$('.arrow');

arrows.forEach(arrow => {
    arrow.addEventListener('click', e => {
        const subSectionClasses = e.target.parentElement.lastElementChild.classList
        subSectionClasses.toggle('expanded', !subSectionClasses.contains('expanded'));
        arrow.src = !subSectionClasses.contains('expanded') ? '../images/icon-arrow-down.svg' : '../images/icon-arrow-up.svg'  

    })
})
```

### Continued development

My layout skills still needs a bit of improvement. I'll keep using some time making pages and sites which need good layout skills to work on them.

## Author

- Website - [Daniel Portillo](https://www.danielportillo.dev)
- Frontend Mentor - [@dportillo23](https://www.frontendmentor.io/profile/dportillo23)
- Twitter - [@DaniDev23](https://twitter.com/DaniDev23)