let questions = 0;

const divs = document.querySelectorAll('.div_informations');

divs.forEach((div) => {
        div.addEventListener('click',() => {
            if (div.classList.contains('show','arrow_rotate')) {
                div.classList.remove('show','arrow_rotate')
            } else {
                div.classList.add('show','arrow_rotate')
            }
    });
});



/*
divs.forEach((div) => {
    div.addEventListener('mouseleave', () => {
        div.classList.remove('show', 'arrow_rotate');
    })
    div.addEventListener('click', () => {
        if (div.classList.contains('show', 'arrow_rotate')) {
            
        } else {
            div.classList.add('show','arrow_rotate');
        }
    });
});
*/






// let questions = 0;

// const arrows = document.querySelectorAll('.arrow');
// const divs = document.querySelectorAll('.div_informations');

// for (let index = 0; index < divs.length; index++) {
//     divs[index].addEventListener('click', ()=>{
//         questions = divs[index]
//         if (divs[index].classList.contains('show')) {
//             arrows[index].classList.remove('arrow_rotate');
//             divs[index].classList.remove('show');
//         } else {
//             arrows[index].classList.add('arrow_rotate');
//             divs[index].classList.add('show');
//         }
//     });
// };
