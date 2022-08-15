const divTimerControls = document.querySelector('.timer__controls');
const buttons = document.querySelectorAll('button');
const inputEl = document.querySelector('input');
const timeLeftElement = document.querySelector('.display__time-left');
const timeEndElement =  document.querySelector('.display__end-time');


let isSwitched = false;
let isTimeoutRun = false;

function convertSecondsInHHMMSS(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return {hours, minutes, seconds};
}

function getTimeInString(timeObj, isEndTime) {

    const h = timeObj.hours >= 10 ? timeObj.hours :`0${timeObj.hours}`;
    const m = timeObj.minutes >= 10 ? timeObj.minutes : `0${timeObj.minutes}`;
    const s = timeObj.seconds >= 10 ? timeObj.seconds : `0${timeObj.seconds}`;
        
    const result = `${h == '00' && !isEndTime ? '' : `${h}:`}${m == '00' && h == '00' ? '' : `${m}:`}${s}`;

    return result;
}

function getEndTime(seconds) {
    const currtime = new Date();
    currtime.setSeconds(currtime.getSeconds() + 1 + seconds);
    return {
        hours: currtime.getHours(),
        minutes: currtime.getMinutes(),
        seconds: currtime.getSeconds(),
    }
}

function renderTimer(totalSeconds) {
    const leftTime = convertSecondsInHHMMSS(totalSeconds);

    timeLeftElement.textContent = getTimeInString(leftTime);  
    if (totalSeconds > 0 && !isSwitched) {
        isTimeoutRun = true;
        setTimeout(() => renderTimer(totalSeconds - 1), 1000);
    } else {
        isTimeoutRun = false;
        isSwitched = false;
    }
}

function handleButtonTimeControl(e, isBtn=true) {
    const btn = e.target;
    const seconds = isBtn ? Number(btn.dataset.time) : Number(e.target.value) * 60;
    const endTime = getEndTime(seconds);
    timeEndElement.textContent = `Be back at ${getTimeInString(endTime, true)}`;
    isSwitched = true ? isTimeoutRun : false;
    setTimeout(() => renderTimer(seconds), 1050);
}

function onClickTimerContorols(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        buttons.forEach(btn => btn.setAttribute('disabled', true));

        handleButtonTimeControl(e);

        setTimeout(() => {
            buttons.forEach(btn => btn.removeAttribute('disabled'))
        }, 1500);
    }
}

divTimerControls.addEventListener('click', onClickTimerContorols);
inputEl.addEventListener('blur', (e) => {
    e.preventDefault();
    setTimeout(() => handleButtonTimeControl(e, false), 1550);
    setTimeout(() => inputEl.value = '', 2000);
});