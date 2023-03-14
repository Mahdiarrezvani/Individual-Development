import { dataBase } from './dataBase.js'
let mofid = document.querySelector('.mofid');
let subjects = ['lesson', 'english', 'study', 'code', 'learning', 'wasted'];
let firstOneContainer = document.querySelector('.first-one-container');

function workMofid() {
    let subjectsMofid = ['lesson', 'english', 'study', 'code', 'learning'];
    let sumMahdiar = 0;
    let sumAmin = 0;
    let sumAbbas = 0;
    dataBase[0].forEach(function(e) {
        subjectsMofid.forEach(function(subject) {
            sumMahdiar = sumMahdiar + +e[subject];
        });
    });
    dataBase[1].forEach(function(e) {
        subjectsMofid.forEach(function(subject) {
            sumAmin = sumAmin + +e[subject];
        });
    });
    dataBase[2].forEach(function(e) {
        subjectsMofid.forEach(function(subject) {
            sumAbbas = sumAbbas + +e[subject];
        });
    });
    mofid.innerHTML = `
    <p class="title">کار های مفید</p>
    <div>
        <p>mahdiar : <span>${sumMahdiar}</span></p>
        <p>amin : <span>${sumAmin}</span></p>
        <p>amir abbas : <span>${sumAbbas}</span></p>
    </div>
    `;
}
workMofid();
// 
// 
// 
let sumMahdiar = 0;
let sumAmin = 0;
let sumAbbas = 0;

function first(subject) {
    dataBase[0].forEach(function(e) {
        sumMahdiar = sumMahdiar + +e[subject];
    });
    // 
    dataBase[1].forEach(function(e) {
        sumAmin = sumAmin + +e[subject];
    });
    // 
    dataBase[2].forEach(function(e) {
        sumAbbas = +sumAbbas + +e[subject];
    });
    // 
    let subjects = [sumAbbas, sumAmin, sumMahdiar];
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
        subjects.forEach(function(e) {
            if (e == bigger) {
                return firstPersonNumber = e;
            }
        });
        // 
        firstPerson = a(firstPersonNumber);
    })();
    firstOneContainer.insertAdjacentHTML('beforeend', `
    <p>${subject} : <span>${firstPerson}</span></p>
    `);
}
subjects.forEach(function(subject) {
    first(subject);
});

function a(s) {
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