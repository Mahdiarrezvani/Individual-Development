let resultMahdiar = document.querySelector('.mahdiar');
let resultAbbas = document.querySelector('.abbas');
let resultAmin = document.querySelector('.amin');
let subjectElem = document.querySelector('.subject');
let fewDay = document.querySelector('.few-day');
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
//
fewDay.innerHTML = "in " + dataBase[0].length + " day";
let url = new URLSearchParams(location.search);
let type = url.get('type');
let subject = url.get('subject');
subjectElem.innerHTML = subject;
let sumMahdiar = 0;
dataBase[0].forEach(function(e) {
    sumMahdiar = sumMahdiar + +e[subject];
});
resultMahdiar.innerHTML = `mahdiar : ${sumMahdiar} min`;
let sumAmin = 0;
dataBase[1].forEach(function(e) {
    sumAmin = sumAmin + +e[subject];
});
resultAmin.innerHTML = `amin : ${sumAmin} min`;
let sumAbbas = 0;
dataBase[2].forEach(function(e) {
    sumAbbas = +sumAbbas + +e[subject];
});
resultAbbas.innerHTML = `amir abbas : ${sumAbbas}  min`;
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