let questions = 0;

const arrows = document.querySelector('.arrow');
const divs = document.querySelectorAll('.div_informations');

// let close = function () {
//     arrows.
// }

for (let index = 0; index < divs.length; index++) {
        divs[index].addEventListener('click', ()=>{
            questions = divs[index]
            if (divs[index].classList.contains('show')) {
                arrows.classList.remove('arrow_rotate');
                divs[index].classList.remove('show');
            } else {
                arrows.classList.add('arrow_rotate');
                divs[index].classList.add('show');
            }            
            
        });
    };




/*
let questions = 0;

const arrows = document.querySelector('.arrow');
const divs = document.querySelectorAll('.div_informations');

for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener('click', ()=>{
        questions = divs[index]
        if (divs[index].classList.contains('show')) {
            arrows.classList.remove('arrow_rotate');
            divs[index].classList.remove('show');
        } else {
            arrows.classList.add('arrow_rotate');
            divs[index].classList.add('show');
        }
    });
};
*/