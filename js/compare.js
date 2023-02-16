import { dataBase } from './dataBase.js'
let url = new URLSearchParams(location.search);
let name = url.get('name');
//
let subjects = ['code', 'study', 'english', 'lesson', 'wasted'];
let title = document.querySelector('.title');
let result = document.querySelector('.result');
let yesterdayElem = document.querySelector('.yesterday');
let todayElem = document.querySelector('.today');
let andis = null;
switch (name) {
    case "mahdiar":
        andis = 0;
        break;
    case "amin":
        andis = 1;
        break;
    case "amirAbbas":
        andis = 2;
        break;
}
let Yesterday = dataBase[andis].length - 2;
let Today = dataBase[andis].length - 1;
let yesterdayObject = dataBase[andis][Yesterday];
let todayObject = dataBase[andis][Today];
//
subjects.forEach(function(e) {
    let li = document.createElement('li');
    li.innerHTML = e + " : " + yesterdayObject[e];
    yesterdayElem.append(li);
});
//
subjects.forEach(function(e) {
    let li = document.createElement('li');
    li.innerHTML = e + " : " + todayObject[e];
    todayElem.append(li);
});
// باید درست بشه از لحاظ کلین کد
function compare() {
    subjects.forEach(function(subject) {
        let li = document.createElement('li');
        result.append(li);
        if (subject == 'wasted') {
            if (+todayObject[subject] > +yesterdayObject[subject]) {
                li.innerHTML = subject + " : " + "regress 😤🤬";
            } else if (+todayObject[subject] == +yesterdayObject[subject]) {
                li.innerHTML = subject + " : " + "no progress 👎";
            } else {
                li.innerHTML = subject + " : " + "better than yesterday 👏";
            }
        } else {
            if (+todayObject[subject] > +yesterdayObject[subject]) {
                li.innerHTML = subject + " : " + "better than yesterday 👏";
            } else if (+todayObject[subject] == +yesterdayObject[subject]) {
                li.innerHTML = subject + " : " + "no progress 👎";
            } else {
                li.innerHTML = subject + " : " + "regress 😤🤬";
            }
        }
    });
}
compare();
title.innerHTML = name;