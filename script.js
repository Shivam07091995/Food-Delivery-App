const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const more = document.querySelector('#more');
const newarrivals = document.querySelector('#newarrivals');

burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
})

more.addEventListener('click', ()=> {
    if(newarrivals.classList.contains('hidden')){
        newarrivals.classList.remove('hidden');
    }
    else{
        mennewarrivals.classList.add('hidden');
    }
})