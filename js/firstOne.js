import { dataBase } from './dataBase.js'
let resultMahdiar = document.querySelector('.mahdiar');
let resultAbbas = document.querySelector('.abbas');
let resultAmin = document.querySelector('.amin');
let subjectElem = document.querySelector('.subject');
let fewDay = document.querySelector('.few-day');
//
fewDay.innerHTML = "in " + dataBase[0].length + " day";
let url = new URLSearchParams(location.search);
let subject = url.get('subject');
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
console.log(dataBase[2].length);
resultAbbas.innerHTML = `<div>amir abbas : ${sumAbbas}</div>${average(sumAbbas)}`;
// 
let array = [sumAbbas, sumAmin, sumMahdiar];
let first = null;
let last = null;
(function() {
    // first
    let bigger = Math.max(sumAbbas, sumAmin, sumMahdiar);
    let firstPersonNumber = null;
    array.forEach(function(e) {
        if (e == bigger) {
            return firstPersonNumber = e;
        }
    });
    let firstPerson = null;
    if (firstPersonNumber == sumMahdiar) {
        firstPerson = "mahdiar";
    } else if (firstPersonNumber == sumAmin) {
        firstPerson = "amin";
    } else {
        firstPerson = "amir abbas";
    }
    first = firstPerson;
})();

(function() {
    // last
    let smaller = Math.min(sumAbbas, sumAmin, sumMahdiar);
    let lastPersonNumber = null;
    array.forEach(function(e) {
        if (e == smaller) {
            return lastPersonNumber = e;
        }
    });
    let lastPerson = null;
    if (lastPersonNumber == sumMahdiar) {
        lastPerson = "mahdiar";
    } else if (lastPersonNumber == sumAmin) {
        lastPerson = "amin";
    } else {
        lastPerson = "amir abbas";
    }
    last = lastPerson;
})();
// For Wasted Time
let firstOne = document.querySelector('.first-one');
let lastOne = document.querySelector('.last-one');
if (subject == "wasted") {
    firstOne.innerHTML = `first-one : 👌${last}👏`;
    lastOne.innerHTML = `last-one : 😒  ${first}🤦‍♂️`;
} else {
    lastOne.innerHTML = `last-one : 😒${last}🤦‍♂️`;
    firstOne.innerHTML = `first-one : 👌${first}👏`;
}

function average(person) {
    // let average = person / dataBase[0].length;
    let average = Math.ceil(person / dataBase[0].length);
    return `<div>average per day : ${average}</div>`;
}