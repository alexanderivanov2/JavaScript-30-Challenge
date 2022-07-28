
const drumKeys = {
    KeyA: {'data-key': '65', soundTime: 500, countdownTime: 0},
    KeyS: {'data-key':'83', soundTime: 500, countdownTime: 0},
    KeyD: {'data-key':'68', soundTime: 500, countdownTime: 0},
    KeyF: {'data-key':'70', soundTime: 1000, countdownTime: 0},
    KeyG: {'data-key':'71', soundTime: 800, countdownTime: 0},
    KeyH: {'data-key':'72', soundTime: 800, countdownTime: 0},
    KeyJ: {'data-key':'74', soundTime: 500, countdownTime: 0},
    KeyK: {'data-key':'75', soundTime: 600, countdownTime: 0},
    KeyL: {'data-key':'76', soundTime: 500, countdownTime: 0},
}

window.addEventListener('keydown', (e) => {
    e.preventDefault();

    const pressedKey = e.code;
    const drumKey = drumKeys[pressedKey];

    if (drumKey) {
        const dataKey = drumKey['data-key'];
        const soundTimeout = drumKey.soundTime;

        const divDrumKey = document.querySelector(`[data-key="${dataKey}"]`);
        const audioDrumKey = document.querySelector(`audio[data-key="${dataKey}"]`);
        
        if (drumKey.countdownTime == 0) {
            drumKey.countdownTime = soundTimeout;
            divDrumKey.classList.add('playing');
            audioDrumKey.play();
        }

        setTimeout(() => drumKey.countdownTime = 0, soundTimeout);
        setTimeout(() => divDrumKey.classList.remove('playing'), soundTimeout);
    }
});