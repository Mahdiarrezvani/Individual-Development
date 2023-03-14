import { dataBase } from './dataBase.js'
let resultMahdiar = document.querySelector('.mahdiar');
let resultAbbas = document.querySelector('.abbas');
let resultAmin = document.querySelector('.amin');
let subjectElem = document.querySelector('.subject');
let fewDay = document.querySelector('.few-day');
//
// باید کلین بشه مثل app.js
// البته همونم باید کلین بشه
let url = new URLSearchParams(location.search);
let subject = url.get('subject');
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
dataBase[0].forEach(function(e) {
    sumMahdiar = sumMahdiar + +e[subject];
});
resultMahdiar.innerHTML = `<div>mahdiar : ${sumMahdiar} min</div>${average(sumMahdiar)}`;
let sumAmin = 0;
dataBase[1].forEach(function(e) {
    sumAmin = sumAmin + +e[subject];
});
resultAmin.innerHTML = `<div>amin : ${sumAmin} min</div>${average(sumAmin)}`;
let sumAbbas = 0;
dataBase[2].forEach(function(e) {
    sumAbbas = +sumAbbas + +e[subject];
});
resultAbbas.innerHTML = `<div>amir abbas : ${sumAbbas}</div>${average(sumAbbas)}`;
// 
let array = [sumAbbas, sumAmin, sumMahdiar];
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
    firstPerson = a(firstPersonNumber);
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
    lastPerson = a(lastPersonNumber);
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
// نام گذاری رو درست کن
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