let parameters = {};

window.addEventListener('load', (e) => startClock(e));

function startClock(e) {
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secHand = document.querySelector('.second-hand');
    
    function workClock() {
        const time = new Date(Date.now());
        let hour = time.getHours();
        let mins = time.getMinutes();
        let seconds = time.getSeconds();
    
        let hourDeg = convertHours(hour);
        let minsDeg = converMinutesOrSeconds(mins);
        let secDeg = converMinutesOrSeconds(seconds);
        console.log(`${hour}:${mins}:${seconds}`);
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        minHand.style.transform = `rotate(${minsDeg}deg)`;
        secHand.style.transform = `rotate(${secDeg}deg)`;
        
        setTimeout(() => workClock(), 1000);
    }
     
    workClock();
}

function convertHours(hour) {
    return Math.abs(hour - 9) * 30;
}

function converMinutesOrSeconds(n) {
    return Math.abs(n * 6) + 90;
}

