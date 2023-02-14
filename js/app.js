let userBtn = [
    { id: 0, name: "mahdiar" },
    { id: 1, name: "amin" },
    { id: 2, name: "amir abbas" },
];
let dataBase = [
    // Mahdiar
    mahdiar = [
        { date: "1401/11/16", day: "sunday", lesson: "0", code: "140", wasted: "90", study: "0", english: "0" },
        { date: "1401/11/17", day: "monday", lesson: "0", code: "200", wasted: "135", study: "0", english: "0" },
        { date: "1401/11/18", day: "tuesday", lesson: "0", code: "120", wasted: "40", study: "23", english: "23" },
        { date: "1401/11/19", day: "wendesday", lesson: "90", code: "144", wasted: "120", study: "0", english: "27" },
        { date: "1401/11/20", day: "thursday", lesson: "93", code: "90", wasted: "120", study: "15", english: "39" },
        { date: "1401/11/21", day: "friday", lesson: "0", code: "240", wasted: "150", study: "25", english: "40" },
        { date: "1401/11/22", day: "saturday", lesson: "113", code: "0", wasted: "200", study: "25", english: "0" },
        { date: "1401/11/23", day: "sunday", lesson: "110", code: "0", wasted: "120", study: "13", english: "0" },
    ],
    // Amin
    amin = [
        { date: "1401/11/16", day: "sunday", lesson: "0", code: "240", wasted: "100", study: "0", english: "0" },
        { date: "1401/11/17", day: "monday", lesson: "0", code: "150", wasted: "150", study: "0", english: "60" },
        { date: "1401/11/18", day: "tuesday", lesson: "150", code: "20", wasted: "60", study: "0", english: "0" },
        { date: "1401/11/19", day: "wendesday", lesson: "90", code: "120", wasted: "40", study: "0", english: "60" },
        { date: "1401/11/20", day: "thursday", lesson: "0", code: "120", wasted: "0", study: "0", english: "0" },
        { date: "1401/11/21", day: "friday", lesson: "0", code: "0", wasted: "0", study: "0", english: "0" },
        { date: "1401/11/22", day: "saturday", lesson: "150", code: "75", wasted: "120", study: "0", english: "0" },
        { date: "1401/11/23", day: "sunday", lesson: "120", code: "30", wasted: "120", study: "30", english: "0" },
    ],
    // Amir Abbas
    abbas = [
        { date: "1401/11/16", day: "sunday", lesson: "0", code: "60", wasted: "300", study: "0", english: "0" },
        { date: "1401/11/17", day: "monday", lesson: "30", code: "0", wasted: "300", study: "0", english: "0" },
        { date: "1401/11/18", day: "tuesday", lesson: "120", code: "240", wasted: "90", study: "0", english: "0" },
        { date: "1401/11/19", day: "wendesday", lesson: "120", code: "0", wasted: "100", study: "20", english: "15" },
        { date: "1401/11/19", day: "thursday", lesson: "60", code: "219", wasted: "180", study: "0", english: "0" },
        { date: "1401/11/19", day: "friday", lesson: "0", code: "0", wasted: "300", study: "0", english: "0" },
        { date: "1401/11/22", day: "saturday", lesson: "120", code: "0", wasted: "300", study: "0", english: "0" },
        { date: "1401/11/23", day: "sunday", lesson: "300", code: "30", wasted: "120", study: "0", english: "0" },
    ],
];
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
    console.log(namePepole);
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