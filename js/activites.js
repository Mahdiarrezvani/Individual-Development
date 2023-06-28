import { dataBase } from './dataBase.js'
import {backHomePage} from './mixina.js'
backHomePage();
// 
let subject = "lesson";
let resultMahdiar = document.querySelector('.mahdiar');
let resultAbbas = document.querySelector('.abbas');
let resultAmin = document.querySelector('.amin');
let subjectElem = document.querySelector('.subject');
let btnFirst = document.querySelectorAll('.btn-asdasdsd');
let fewDay = document.querySelector('.few-day');
// 
let activeElem = document.querySelector('.active');
activeElem.style.backgroundColor = "#252525";
// باید کلین بشه مثل app.js
// البته همونم باید کلین بشه
btnFirst.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        activeFun();
        e.target.style.backgroundColor = "#252525";
        subject = e.target.attributes.name.nodeValue;
        learningSubject();
        sectionShowResult();
        firstPersonFind()
        lastPersonFind()
        firstOneForWastedTime();
    });
})
function activeFun() {
    btnFirst.forEach(function (elem) {
        elem.style.backgroundColor = "transparent";
    })
}
function learningSubject() {
    switch (subject) {
        case 'learning':
            fewDay.innerHTML = "in " + (dataBase[0].length - 30) + " day";
            break;
        default:
            fewDay.innerHTML = "in " + dataBase[0].length + " day";
            break;
    }
}
let sumMahdiar = 0;
let sumAmin = 0;
let sumAbbas = 0;
let array = [];
// محاسبه جمع موضوع مورد نظر
function sectionShowResult() {

    subjectElem.innerHTML = subject;
    let information = [
        { id: 0, name: 'mahdiar', storage: sumMahdiar, elem: resultMahdiar },
        { id: 1, name: 'amin', storage: sumAmin, elem: resultAmin },
        { id: 2, name: 'amir abbas', storage: sumAbbas, elem: resultAbbas }
    ];
    information.forEach(function (info) {
        info.storage = 0;
        dataBase[info.id].forEach(function (e) {
            info.storage = info.storage + +e[subject];
        });
        info.elem.innerHTML = `<div><p class="name-person">${info.name}</p> <p class="section-time">time: ${info.storage} min</p></div>${average(info.storage)}`;
    });
    array = [sumMahdiar = information[0].storage, sumAmin = information[1].storage, sumAbbas = information[2].storage]
}

let firstPerson = null;
let lastPerson = null;
function firstPersonFind() {
    let bigger = Math.max(sumAbbas, sumAmin, sumMahdiar);
    let firstPersonNumber = null;
    array.forEach(function (e) {
        if (e == bigger) {
            return firstPersonNumber = e;
        }
    });
    firstPerson = findPerson(firstPersonNumber);
}
function lastPersonFind() {
    let smaller = Math.min(sumAbbas, sumAmin, sumMahdiar);
    let lastPersonNumber = null;
    array.forEach(function (e) {
        if (e == smaller) {
            return lastPersonNumber = e;
        }
    });
    lastPerson = findPerson(lastPersonNumber);
}
// For Wasted Time
function firstOneForWastedTime() {
    let firstOne = document.querySelector('.first-one');
    let lastOne = document.querySelector('.last-one');
    if (subject == "wasted") {
        firstOne.innerHTML = `<span>first one</span> <span class="name-last">${lastPerson}</span>`;
        lastOne.innerHTML = `<span>last one</span> <span class="name-first">${firstPerson}</span>`;
    } else {
        lastOne.innerHTML = `<span>last one</span> <span class="name-last">${lastPerson}</span>`;
        firstOne.innerHTML = `<span>first one</span> <span class="name-first">${firstPerson}</span>`;
    }
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
    return `<div>in day : ${average}</div>`;
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
            person = "amir";
            // person = "amir abbas";
            break;
    }
    return person;
}
learningSubject();
sectionShowResult();
firstPersonFind()
lastPersonFind()
firstOneForWastedTime();