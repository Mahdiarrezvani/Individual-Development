import { dataBase } from "../database/dataBaseChallenges.js";
// ! متغیر ها
let containerChallnge = document.querySelector('.container-challnge')
let backHistoryBtn = document.querySelector('.back-history')
let informationChallengeElem = document.querySelector('.information-challenge');
let processChallenges = document.querySelector('.process-challenges');
let resultChallenge = document.querySelector('.result-challenge')
let stateChallengeEnd = document.querySelector('.state-challenge-end')
let challenge, getChallengeDB, getChallengeParams, idChallenge, numberDay;
let containerBtnChallenge = document.querySelector('.container-btn-challenge')
containerChallnge.style.display = "none"
let persons = ['mahdiar', 'amin', 'abbas'];
getParams()
// ! Functions
function backHistory() {
    history.back();
}
function getParams() {
    let params = new URLSearchParams(location.search);
    idChallenge = params.get('id') - 1;
    getChallengeParams = params.get('challenge');
    getChallengeDB = dataBase[getChallengeParams]
    challenge = getChallengeDB[idChallenge];
}
function stateChallen() {
    let infoChallenge = challenge.infoChallenge;
    informationChallengeElem.insertAdjacentHTML('beforeend', `
        <td>${infoChallenge.start}</td>
        <td>${infoChallenge.end}</td>
        <td>${infoChallenge.period} day</td>
        <td>${infoChallenge.target}</td>`);
}
function createSectionInfo() {
    let andis = 0;
    let day = 0;
    for (let a = 0; a < numberDay; a++) {
        day++;
        processChallenges.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${challenge.mahdiar.arrayChallengeProcess[andis]}</td>
            <td>${challenge.amin.arrayChallengeProcess[andis]}</td>
            <td>${challenge.abbas.arrayChallengeProcess[andis]}</td>
            <td>${day}</td>
        </tr>`);
        andis++;
    }
}
// todo اسم
function sumNumbersChallenge() {
    let andis = 0;
    let mahdiar = 0;
    let amin = 0;
    let abbas = 0;
    for (let a = 0; a < numberDay; a++) {
        // todo اسم
        mahdiar = mahdiar + +challenge.mahdiar.arrayChallengeProcess[andis];
        amin = amin + +challenge.amin.arrayChallengeProcess[andis];
        abbas = abbas + +challenge.abbas.arrayChallengeProcess[andis];
        andis++;
    }
    challenge.mahdiar.result = mahdiar;
    challenge.amin.result = amin;
    challenge.abbas.result = abbas;
    checkIsSucssesfullChallenge(mahdiar, amin, abbas)
}
function checkIsSucssesfullChallenge(mahdiar, amin, abbas) {
    let target = challenge.infoChallenge.target;
    if (mahdiar >= target) {
        challenge.mahdiar.state = '👍';
    }
    if (amin >= target) {
        challenge.amin.state = '👍';
    }
    if (abbas >= target) {
        challenge.abbas.state = '👍';
    }
    createResult();
}
function createResult() {
    for (let a = 0; a < 3; a++) {
        resultChallenge.insertAdjacentHTML('beforeend', `
        <tr>
        <td>${challenge[persons[a]].name}</td>
            <td>${challenge[persons[a]].state}</td>
            <td>${challenge[persons[a]].result}</td>
        </tr>`);
    }
}
function checkIsEndChallenge() {
    if (challenge.infoChallenge.period <= challenge.mahdiar.arrayChallengeProcess.length) {
        stateChallengeEnd.innerHTML = 'end of the challenge';
        stateChallengeEnd.style.backgroundColor = "#ff1414";
    } else {
        stateChallengeEnd.innerHTML = 'doing the challenge'
    }
}
function createBtnChallngeId() {
    let numberChallenge = 1;
    getChallengeDB.forEach(function (info) {
        // let infoChallenge=info.infoChallenge
        containerBtnChallenge.insertAdjacentHTML('beforeend', `
        <button><a href="challenges.html?challenge=${getChallengeParams}&id=${numberChallenge}">${numberChallenge}</a></button>`);
        // todo sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasddas
        // <button><a href="challenges.html?challenge=${getChallengeParams}&id=${numberChallenge}"><span>${infoChallenge.start}</span><span>${infoChallenge.end}</span><span>${infoChallenge.period}</span><span>${infoChallenge.target}</span></a></button>`);
        numberChallenge++;
    })
}
// ! Execution Of Function || اجرای تابع ها
backHistoryBtn.addEventListener('click', backHistory);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if (idChallenge == -1) {
    containerBtnChallenge.style.display = "grid"
    createBtnChallngeId()
} else {
    containerBtnChallenge.style.display = "none"
    containerChallnge.style.display = "block"
    numberDay = challenge.mahdiar.arrayChallengeProcess.length;
    stateChallen();
    createSectionInfo();
    sumNumbersChallenge();
    checkIsEndChallenge();
}