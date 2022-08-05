# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![desktop-view](./images/desktop-view.jpg)
![mobile-view](./images/mobile-view.jpg)

### Links

- Solution URL: [My repo](https://github.com/stuartambient/interactive-rating-component-main)
- Live Site URL: [My live set](https://stuartambient.github.io/interactive-rating-component-main/)

## My process

Try to follow instructions, study the preview images, write out the html. I find sometimes when starting to style some changes need to be made to the html. For instance, do I want a label in the form, or a wrapper around part of the component.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

One small thing I might have learned is regarding svg's. I placed the icon-star inside a div, added a border to the div and set a width and height on it on the div. The strategy is to set the div height and width and then set the svg at 100% width. Anyway, I found the icon was being blocked and couldn't be scene hidden behind the div perhaps. It showd in inspector.

When I opened the svg the code it had a width and height coded. I added the viewBox property and with that I was able to use the strategy abover.

It's been a while since I looked at svg's so I'll need to review exactly why the viewBox was needed for the html.

svg snippet:

```
svg width="17" height="16" viewBox="0 0 17 16"

```

in the html:

```
 <div class="ratings__image">
          <img
            src="./images/icon-star.svg"
            class="ratings__start-icons"
            alt="icon star"
          />
        </div>
```

### Continued development

I want to continue working with flexbox (and grid) for layout but also increase my knowledge of how and when to use the properties I already know (margin, height, padding, color), as well as learn properties I may not be aware of.

### Useful resources

- [A complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Covers all of flexbox. What else is there to say. Ton of example and thorough coverage.

```

```
