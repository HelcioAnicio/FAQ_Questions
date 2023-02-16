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
