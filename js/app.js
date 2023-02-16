import { dataBase } from './dataBase.js'
import { userBtn } from './dataBase.js';
let btnContainer = document.querySelector('.btn');
addButtons();
let buttons = document.querySelectorAll('.button');
let containerTable = document.querySelector('.container-table');
let namePepoleElem = document.querySelector('.namePepole');
let welcome = document.querySelector('.welcome');
let textWelcom = document.querySelector('.text-welcom');
addEventBtn();

function showTable(e) {
    e.target.removeEventListener('click', showTable);
    let value = e.target.value;
    let namePepole = e.target.innerHTML;
    textWelcom.innerHTML = "welcome, mr " + namePepole;
    btnContainer.classList.add('transition');
    setTimeout(function() {
        show(value, namePepole);
        welcome.style.display = "block";
    }, 1400);
}


function show(value, namePepole) {
    setTimeout(function() {
        welcome.style.display = "none";
        addTable(value, namePepole);
        btnContainer.style.display = "none";
        containerTable.style.display = "block";
        containerTable.classList.add('showTable');
    }, 4000);
}

function addTable(value, namePepole) {
    dataBase[value].forEach(function(e) {
        namePepoleElem.innerHTML = namePepole;
        containerTable.insertAdjacentHTML('beforeend', `
    <div class="table showTable">
        <div class="date">
            <span>${e.date}</span>
            <span>${e.day}</span>
        </div>
        <div class="work">
            <p>lesson : <span>${e.lesson} min</span></p>
            <p>code : <span>${e.code} min</span></p>
            <p>wasted time : <span>${e.wasted} min</span></p>
            <p>read book : <span>${e.study} min</span></p>
            <p>english : <span>${e.english} min</span></p>
            </div>
    </div>`);
    });
}

function addButtons() {
    userBtn.forEach(function(user) {
        btnContainer.insertAdjacentHTML('beforeend', `<button class="button" value="${user.id}">${user.name}</button>`);
    });
}

function addEventBtn() {
    buttons.forEach(function(e) {
        e.addEventListener('click', showTable);
    });
}