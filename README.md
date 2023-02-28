# FAQ Questions

This project is about one page "Frequently asked questions" or FAQ. It is used a lot when some questions happen a lot, so we leave the answers ready.

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


## Overview


### The challenge

The users should be able to:
- See 5 questions very comum about any project.
- It's possible to click on any question.
- See the answers.
- Answers with links, which direct you to solve the question.
- View the optimal layout depending on their device's screen size.

### Screenshot
![desktop-design](https://user-images.githubusercontent.com/117602073/217695406-29d7f359-d2c6-4445-a3a4-59f0b5adb01c.jpg)

### Links

- https://faq-questions.vercel.app/

## My process

### Built with

- Semantic HTML5
- CSS3 custom properties
- Flexbox
- Responsiveness
- Pseudo-classes
- JavaScript
- Repeat loop
- Conditional
- Metods

### What I learned

How to use "forEach" to select one of several element options and position background.

```CSS
.div_illustration {
    width: 45%;
    height: 45%;
    top: 3%;
    left: 27%;
    position: absolute;
    background-image: url(./assets/illustration-woman-online-mobile.svg);
    background-size: contain;
    background-position: 0 0;
    background-repeat: no-repeat;
}
```

```JS
const divs = document.querySelectorAll('.div_informations');
divs.forEach((div) => {
        div.addEventListener('click',() => {
            if (div.classList.contains('show','arrow_rotate')) {
                div.classList.remove('show','arrow_rotate')
            
            } else { 
                divs.forEach(div => div.classList.remove('show','arrow_rotate'))
                 div.classList.add('show','arrow_rotate')
            }
    });
});

```

### Continued development

I pretend to learn how to use API's in my projects.

### Useful resources

This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/


## Author

- Linkedin - https://www.linkedin.com/in/helcio-anicio/ 
- Vercel - https://vercel.com/helcioanicio

<--
## Acknowledgments
 -->
