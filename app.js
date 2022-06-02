const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', function(){
    //console.log(menu.classList);
    //console.log(menu.classList.contains('random'));
    //console.log(menu.classList.contains('menu'));
    menu.classList.toggle('menu--ativo');
})