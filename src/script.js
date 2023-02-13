let questions = 0;

const arrows = document.querySelector('.arrow');
const divs = document.querySelectorAll('.div_informations');

for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener('change', ()=>{
        questions = divs[index]
        if (divs.classList.contains('show')) {
            arrows.classList.remove('arrow_rotate');
            divs.classList.remove('show');
        } else {
            arrows.classList.add('arrow_rotate');
            divs.classList.add('show');
        }
    });
};

/*
divs.forEach((div) => 
div.addEventListener('click', function(){
            if (div.classList.contains('show')) {
                arrows.classList.remove('arrow_rotate');
                div.classList.remove('show');
            } else {
                arrows.classList.add('arrow_rotate');
                div.classList.add('show');
            }
        })
        );
*/
        

/* 
let feedback_level = 0

const inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('change', ()=>{
            feedback_level = inputs[index].value
            document.querySelector('button').addEventListener('click', ()=>{
                document.querySelectorAll('main')[0].style.display='none';
                document.querySelectorAll('section')[0].style.display='flex';
                document.querySelector('span').innerHTML=feedback_level
            })
        })
    }
s*/