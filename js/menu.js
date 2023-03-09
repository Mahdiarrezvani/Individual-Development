let firstOneDataBase = [
    { href: 'pages/firstOne.html?subject=lesson', title: 'lesson' },
    { href: 'pages/firstOne.html?subject=english', title: 'language' },
    { href: 'pages/firstOne.html?subject=wasted', title: 'wasted time' },
    { href: 'pages/firstOne.html?subject=study', title: 'study' },
    { href: 'pages/firstOne.html?subject=code', title: 'code' },
    { href: 'pages/firstOne.html?subject=learning', title: 'learning' },
];
let month = [
    { href: 'pages/months.html?name=mahdiar&dataBase=0', title: 'mahdiar' },
    { href: 'pages/months.html?name=amin&dataBase=1', title: 'amin' },
    { href: 'pages/months.html?name=amirAbbas&dataBase=2', title: 'amir abbas' },
];
// 
let firstOne = document.querySelector('.firstOne-ul');
let monthElem = document.querySelector('.month-ul');
let label = document.querySelectorAll('.label');
let underMenu = document.querySelectorAll('.under-menu');
let menu = document.querySelector('.menu');
// Button Menu
let btnOpenMenu = document.querySelector('.btn-open-menu');
let closeMenuBtn = document.querySelector('.close-menu-btn');
btnOpenMenu.addEventListener('click', function() {
    menu.classList.remove('closeMenu');
    menu.classList.add('openMenu');
});
closeMenuBtn.addEventListener('click', function() {
    menu.classList.remove('openMenu');
    menu.classList.add('closeMenu');
});
// 
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
firstOneDataBase.forEach(function(info) {
    firstOne.insertAdjacentHTML('beforeend', `
    <a href="${info.href}">
        <li>${info.title}</li>
    </a>
    `);
});
month.forEach(function(info) {
    monthElem.insertAdjacentHTML('beforeend', `
    <a href="${info.href}">
        <li>${info.title}</li>
    </a>
    `);
});