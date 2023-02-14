let btnMenu = document.querySelector('.btn-menu');
let firstOne = document.querySelector('.firstOne');
let underMenu = document.querySelector('.under-menu');
let menu = document.querySelector('.menu');
let isMenu = false;
btnMenu.addEventListener('click', function() {
    if (isMenu) {
        isMenu = false;
        menu.classList.add('closeMenu')
        menu.classList.remove('openMenu')
    } else {
        isMenu = true;
        menu.classList.add('openMenu')
        menu.classList.remove('closeMenu')
    }
});
let is = false;
firstOne.addEventListener('click', function() {
    if (is) {
        underMenu.style.display = 'none';
        is = false;
    } else {
        underMenu.style.display = 'block';
        is = true;
    }
});