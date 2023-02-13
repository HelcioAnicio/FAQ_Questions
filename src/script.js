var arrow = document.querySelectorAll('.arrow')

var div = document.querySelectorAll('.div_informations')
    div.addEventListener('click',function(){
    var efect = document.querySelectorAll('.div_informations');

    if (efect.classList.contains('show')) {
        arrow.classList.remove('arrow_rotate');
        efect.classList.remove('show');
    } else {
        arrow.classList.add('arrow_rotate');
        efect.classList.add('show');
    }
});

// var questions = document.querySelectorAll(".div_informations");
// questions.addEventListener('click',function(){
//     alert('eu gosto de codar');
// });


// let feedback_level = 0

// const div = document.querySelectorAll('input');
// for (let index = 0; index < div.length; index++) {
//     div[index].addEventListener('change', ()=>{
//         feedback_level = div[index].value
//         document.querySelector('button').addEventListener('click', ()=>{
//             document.querySelectorAll('main')[0].style.display='none';
//             document.querySelectorAll('section')[0].style.display='flex';
//             document.querySelector('span').innerHTML=feedback_level
//         })
//     })
// }