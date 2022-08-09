const liItems = Array.from(document.querySelectorAll('li'));
const spanEl = document.querySelector('.total');

const sumTime = (total, a) => {
    a = a.dataset.time
    let [aMin, aSec] = a.split(':');

    let seconds = total + Number(aSec) + (Number(aMin) * 60);
    return seconds;
}

const reduceSeconds = liItems.reduce(sumTime, 0);
console.log(reduceSeconds)
const hours = reduceSeconds / 3600;
const minutes = (hours - Math.floor(hours)) * 60;
const seconds = Math.floor((minutes - Math.floor(minutes)) * 60);


const totalTime = `${hours.toFixed(0)}h:${Math.floor(minutes)}m:${seconds.toFixed(0)}s`;
spanEl.textContent = totalTime;