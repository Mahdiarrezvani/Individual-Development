let btnMenu = document.querySelector('.btn-menu');
let label = document.querySelectorAll('.label');
let underMenu = document.querySelectorAll('.under-menu');
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
label.forEach(function(e) {
    e.addEventListener('click', function() {
        if (is) {
            e.children[0].style.display = 'none';
            is = false;
        } else {
            e.children[0].style.display = 'block';
            is = true;
        }
    });
});