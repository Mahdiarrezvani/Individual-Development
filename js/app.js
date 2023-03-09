import { dataBase } from './dataBase.js'
import { userBtn } from './dataBase.js';
// let backHistory = document.querySelector('.back-history');
let btnContainer = document.querySelector('.btn');
addButtons();
let buttons = document.querySelectorAll('.button');
let containerTable = document.querySelector('.container-tables');
addEventBtn();

function showTable(e) {
    e.target.removeEventListener('click', showTable);
    let value = e.target.value;
    let namePepole = e.target.innerHTML;
    btnContainer.classList.add('transition');
    setTimeout(function() {
        show(value, namePepole);
    }, 1500);
}


function show(value, namePepole) {
    addTable(value, namePepole);
    btnContainer.style.display = "none";
    containerTable.style.display = "block";
    containerTable.classList.add('showTable');
}

function addTable(value, namePepole) {
    dataBase[value].forEach(function(e) {
        containerTable.insertAdjacentHTML('beforeend', `
            <div class="container-table">
            <div class="user-info">
                <p>${e.date} | ${e.day}</p>
                <p class="name">${namePepole}</p>
                <p>lesson: ${e.lesson} min</p>
                <p>code: ${e.code} min</p>
                <p>wasted time: ${e.wasted} min</p>
                <p>study: ${e.study} min</p>
                <p>english: ${e.english} min</p>
                <p>learning: ${e.learning} min</p>
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
// backHistory.addEventListener('click', function() {
//     history.back();
// });