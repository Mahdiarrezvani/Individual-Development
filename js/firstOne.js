import { dataBase } from './dataBase.js'
let url = new URLSearchParams(location.search);
let subject = url.get('subject');
let resultMahdiar = document.querySelector('.mahdiar');
let resultAbbas = document.querySelector('.abbas');
let resultAmin = document.querySelector('.amin');
let subjectElem = document.querySelector('.subject');
let fewDay = document.querySelector('.few-day');
// باید کلین بشه مثل app.js
// البته همونم باید کلین بشه
switch (subject) {
    case 'learning':
        fewDay.innerHTML = "in " + (dataBase[0].length - 30) + " day";
        break;
    default:
        fewDay.innerHTML = "in " + dataBase[0].length + " day";
        break;
}
subjectElem.innerHTML = subject;
let sumMahdiar = 0;
let sumAmin = 0;
let sumAbbas = 0;
let array = [];
// محاسبه جمع موضوع مورد نظر
(function() {
    let information = [
        { id: 0, name: 'mahdiar', storage: sumMahdiar, elem: resultMahdiar },
        { id: 1, name: 'amin', storage: sumAmin, elem: resultAmin },
        { id: 2, name: 'amir abbas', storage: sumAbbas, elem: resultAbbas }
    ];
    information.forEach(function(info) {
        dataBase[info.id].forEach(function(e) {
            info.storage = info.storage + +e[subject];
        });
        info.elem.innerHTML = `<div>${info.name} : ${info.storage} min</div>${average(info.storage)}`;
    });
    array = [sumMahdiar = information[0].storage, sumAmin = information[1].storage, sumAbbas = information[2].storage];
})();

let firstPerson = null;
let lastPerson = null;
(function() {
    // first Person
    let bigger = Math.max(sumAbbas, sumAmin, sumMahdiar);
    let firstPersonNumber = null;
    array.forEach(function(e) {
        if (e == bigger) {
            return firstPersonNumber = e;
        }
    });
    // 
    firstPerson = findPerson(firstPersonNumber);
})();

(function() {
    // last Person
    let smaller = Math.min(sumAbbas, sumAmin, sumMahdiar);
    let lastPersonNumber = null;
    array.forEach(function(e) {
        if (e == smaller) {
            return lastPersonNumber = e;
        }
    });
    lastPerson = findPerson(lastPersonNumber);
})();
// For Wasted Time
let firstOne = document.querySelector('.first-one');
let lastOne = document.querySelector('.last-one');
if (subject == "wasted") {
    firstOne.innerHTML = `first-one : 👌${lastPerson}👏`;
    lastOne.innerHTML = `last-one : 😒  ${firstPerson}🤦‍♂️`;
} else {
    lastOne.innerHTML = `last-one : 😒${lastPerson}🤦‍♂️`;
    firstOne.innerHTML = `first-one : 👌${firstPerson}👏`;
}

function average(person) {
    let average = null;
    switch (subject) {
        case 'learning':
            average = Math.ceil(person / (dataBase[0].length - 30));
            break;
        default:
            average = Math.ceil(person / dataBase[0].length);
            break;
    }
    return `<div>average per day : ${average}</div>`;
}
// یکی دیگه براز اسم متغیر رو خیلی خوب نیست
function findPerson(s) {
    let person = null;
    switch (s) {
        case sumMahdiar:
            person = "mahdiar";
            break;
        case sumAmin:
            person = "amin";
            break;
        case sumAbbas:
            person = "amir abbas";
            break;
    }
    return person;
}