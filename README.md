# Frontend Mentor - Blogr landing page solution

This is my solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The purpose of this challenge is to make a responsive landing page for a website Blogr.

### Screenshot

TO BE ADDED

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Starting from the result pictures, I created the HTML page with all needed classes, so that I can easily access the required element during the styling.
Adopting "Mobile-first" worflow design, I worked on the mobile layout first with functional scripts for the burger menu and the menu items, then moved to the desktop layout at the end.

### Built with

- Semantic HTML5 markup
- CSS preprocessor [Sass](https://sass-lang.com/)
- Flex
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

My major learning topic in this challenge is the use of a CSS Preprocessor, I used [Sass](https://sass-lang.com/) and it helped me a lot.
I used variables, mixins, ...which made the styling experience interesting.

Here is an example for a mixin that allow the user to have a flex display with given parameters.

```scss
@mixin display-flex($direction, $justify, $align) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}
```

and it ca be included with the right parameters in the given layout like so :

```scss
nav {
  @include display-flex(row, start, center);
}
```

## Author

- Website - [iSamBa](https://ii-sam.com)
- Frontend Mentor - [@iSamBa](https://www.frontendmentor.io/profile/iSamBa)
- Twitter - [@iSamBa21](https://www.twitter.com/isamba21)
