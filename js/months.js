// let prompts = prompt('قصد دارید در هر صحفه چند تا از باکس ها رو ببینید؟؟');
// 
import { dataBase } from './dataBase.js'
let currentPage = 1;
let numberShow = 30;
let table = document.querySelector('.table');
let btnContainer = document.querySelector('.btn-container');
let subject = new URLSearchParams(location.search)
let namePerson = subject.get('name');
let wichDataBase = subject.get('dataBase');
console.log(wichDataBase);
let numberOfMonth = Math.ceil(dataBase[wichDataBase].length / numberShow);

function createPages(currentPage) {
    let newDataBase = [...dataBase[wichDataBase]];
    let end = numberShow * currentPage;
    let start = end - numberShow;
    let c = newDataBase.slice(start, end);
    c.forEach(function(info) {
        table.insertAdjacentHTML('beforeend', `
    <div class="container-table">
        <div class="user-info">
            <p>${info.date} | ${info.day}</p>
            <p class="name">${namePerson}</p>
            <p>lesson: ${info.lesson} min</p>
            <p>code: ${info.code} min</p>
            <p>wasted time: ${info.wasted} min</p>
            <p>study: ${info.study} min</p>
            <p>english: ${info.english} min</p>
            <p>learning: ${info.learning} min</p>
        </div>
    </div>`);
    });
}

function createBtnPage() {
    for (let s = 1; s < numberOfMonth + 1; s++) {
        btnContainer.insertAdjacentHTML('beforeend', `<button class="btn-page">${s}</button>`);
    }
}

function eventBtns() {
    let btnPage = document.querySelectorAll('.btn-page');
    btnPage.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            table.innerHTML = '';
            let page = e.target.innerHTML;
            createPages(page);
        });
    });
}
createPages(currentPage);
createBtnPage();
eventBtns();
// برای جابه جایی صحفه یه ترنزیشن لازمه