import { dataBase } from './dataBase.js'
let usefulTimeElem = document.querySelector('.mofid');
let subjects = ['lesson', 'english', 'study', 'code', 'learning', 'wasted'];
let firstOneContainer = document.querySelector('.first-one-container');

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
    information.forEach(function(info) {
        dataBase[info.id].forEach(function(e) {
            subjectsMofid.forEach(function(subject) {
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
}
workMofid();
// Firs One
let sumMahdiar, sumAmin, sumAbbas;

function first(subject) {
    sumMahdiar = 0;
    sumAmin = 0;
    sumAbbas = 0;
    let information = [
        { id: 0, name: 'mahdiar', storage: sumMahdiar },
        { id: 1, name: 'amin', storage: sumAmin },
        { id: 2, name: 'amir abbas', storage: sumAbbas }
    ];
    information.forEach(function(info) {
        dataBase[info.id].forEach(function(e) {
            info.storage = info.storage + +e[subject];
        });
    });
    let storages = [sumMahdiar = information[0].storage, sumAmin = information[1].storage, sumAbbas = information[2].storage];
    let firstPerson = null;
    (function() {
        // first Person
        let bigger = null;
        if (subject == 'wasted') {
            bigger = Math.min(sumAbbas, sumAmin, sumMahdiar);
        } else {
            bigger = Math.max(sumAbbas, sumAmin, sumMahdiar);
        }
        let firstPersonNumber = null;
        storages.forEach(function(e) {
            if (e == bigger) {
                return firstPersonNumber = e;
            }
        });
        // 
        firstPerson = findPerson(firstPersonNumber);
    })();
    firstOneContainer.insertAdjacentHTML('beforeend', `
    <p>${subject} : <span>${firstPerson}</span></p>
    `);
}
subjects.forEach(function(subject) {
    first(subject);
});
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