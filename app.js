let userBtn = [
    { id: 0, name: "mahdiar" },
    { id: 1, name: "amin" },
    { id: 2, name: "abbas" },
];
let dataBase = [
    // Mahdiar
    mahdiar = [
        { date: "0000/00/00", day: "---", lesson: "60", code: "75", wasted: "---", study: "", english: "" },
        { date: "0000/00/00", day: "---", lesson: "150", code: "85", wasted: "---", study: "", english: "" },
        { date: "1401/11/16", day: "sunday", lesson: "0", code: "140", wasted: "90", study: "", english: "" },
        { date: "1401/11/17", day: "monday", lesson: "0", code: "200", wasted: "135", study: "0", english: "0" },
    ],
    // Amin
    amin = [
        { date: "0000/00/00", day: "---", lesson: "0", code: "180", wasted: "---", study: "", english: "" },
        { date: "0000/00/00", day: "---", lesson: "150", code: "300", wasted: "---", study: "", english: "" },
        { date: "1401/11/16", day: "sunday", lesson: "0", code: "240", wasted: "100", study: "", english: "" },
        { date: "1401/11/17", day: "monday", lesson: "0", code: "150", wasted: "150", study: "0", english: "60" },
    ],
    // Abbas
    abbas = [
        { date: "0000/00/00", day: "---", lesson: "0", code: "180", wasted: "---", study: "", english: "" },
        { date: "0000/00/00", day: "---", lesson: "---", code: "0", wasted: "---", study: "", english: "" },
        { date: "1401/11/16", day: "sunday", lesson: "0", code: "60", wasted: "300", study: "", english: "" },
        { date: "1401/11/17", day: "monday", lesson: "30", code: "0", wasted: "300", study: "0", english: "0" },
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