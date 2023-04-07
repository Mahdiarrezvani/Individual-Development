import { dataBase } from './dataBase.js'
let usefulTimeElem = document.querySelector('.mofid');
let subjects = ['lesson', 'english', 'study', 'code', 'learning', 'wasted'];
let firstOneContainer = document.querySelector('.first-one-container');
let lastOneContainer = document.querySelector('.last-one-container');
let sumMahdiar, sumAmin, sumAbbas;
//! storage
function storage(subject) {
    sumMahdiar = 0;
    sumAmin = 0;
    sumAbbas = 0;
    let information = [
        { id: 0, name: 'mahdiar', storage: sumMahdiar },
        { id: 1, name: 'amin', storage: sumAmin },
        { id: 2, name: 'amir abbas', storage: sumAbbas }
    ];
    information.forEach(function (info) {
        dataBase[info.id].forEach(function (e) {
            info.storage = info.storage + +e[subject];
        });
    });
    return [sumMahdiar = information[0].storage, sumAmin = information[1].storage, sumAbbas = information[2].storage];
}
//! Firs One
function firstOne(subject) {
    let firstPersonNumber = null;
    let number = null;
    let storages = storage(subject);
    if (subject == 'wasted') {
        number = Math.min(sumAbbas, sumAmin, sumMahdiar);
    } else {
        number = Math.max(sumAbbas, sumAmin, sumMahdiar);
    }
    storages.forEach(function (e) {
        if (e == number) {
            return firstPersonNumber = e;
        }
    });
    let firstPerson = findPerson(firstPersonNumber);
    firstOneContainer.insertAdjacentHTML('beforeend', `
    <p>${subject} : <span>${firstPerson}</span></p>`);
}
//! Last One
function lastOne(subject) {
    let lastPersonNumber = null;
    let storages = storage(subject);
    let number = null;
    if (subject == 'wasted') {
        number = Math.max(sumAbbas, sumAmin, sumMahdiar);
    } else {
        number = Math.min(sumAbbas, sumAmin, sumMahdiar);
    }
    storages.forEach(function (e) {
        if (e == number) {
            return lastPersonNumber = e;
        }
    });
    let lastPerson = findPerson(lastPersonNumber);
    lastOneContainer.insertAdjacentHTML('beforeend', `
    <p>${subject} : <span>${lastPerson}</span></p>`);
}
//! Find Person
function findPerson(number) {
    let person = null;
    switch (number) {
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
//*
subjects.forEach(function (subject) {
    firstOne(subject);
    lastOne(subject);
});
//! Sum Useful Time
function workMofid() {
    let subjectsMofid = ['lesson', 'english', 'study', 'code', 'learning'];
    let sumMahdiar = 0;
    let sumAmin = 0;
    let sumAbbas = 0;
    let information = [
        { id: 0, name: 'mahdiar', storage: sumMahdiar },
        { id: 1, name: 'amin', storage: sumAmin },
        { id: 2, name: 'amir abbas', storage: sumAbbas }
    ];
    information.forEach(function (info) {
        dataBase[info.id].forEach(function (e) {
            subjectsMofid.forEach(function (subject) {
                info.storage = info.storage + +e[subject];
            });
        });
        switch (info.id) {
            case 0:
                sumMahdiar = info.storage;
                break;
            case 1:
                sumAmin = info.storage;
                break;
            case 2:
                sumAbbas = info.storage;
                break;
        }
    });
    usefulTimeElem.innerHTML = `
    <p>mahdiar: <span>${sumMahdiar}</span></p>
    <p>amin: <span>${sumAmin}</span></p>
    <p>amir abbas: <span>${sumAbbas}</span></p>`;
    average(sumMahdiar, sumAmin, sumAbbas)
}
// average
// صدا زده شده workMofid داخل
//! میانگین کار های انجام شده و مفید بوده
function average(sumMahdiar, sumAmin, sumAbbas) {
    let numberDays = dataBase[0].length;
    let averageElem = document.querySelector('.average');
    let mahdiar = Math.floor(sumMahdiar / numberDays);
    let amin = Math.floor(sumAmin / numberDays);
    let abbas = Math.floor(sumAbbas / numberDays);
    averageElem.innerHTML = `
    <p>mahdiar: <span>${mahdiar}</span></p>
    <p>amin: <span>${amin}</span></p>
    <p>amir abbas: <span>${abbas}</span></p>`;
}
workMofid();