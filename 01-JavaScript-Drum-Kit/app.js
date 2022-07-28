
const drumKeys = {
    KeyA: {'data-key': '65', soundTime: 500},
    KeyS: {'data-key':'83', soundTime: 500},
    KeyD: {'data-key':'68', soundTime: 500},
    KeyF: {'data-key':'70', soundTime: 1000},
    KeyG: {'data-key':'71', soundTime: 800},
    KeyH: {'data-key':'72', soundTime: 800},
    KeyJ: {'data-key':'74', soundTime: 500},
    KeyK: {'data-key':'75', soundTime: 600},
    KeyL: {'data-key':'76', soundTime: 500},
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

        divDrumKey.classList.add('playing');
        audioDrumKey.currentTime = 0;
        audioDrumKey.play();

        setTimeout(() => divDrumKey.classList.remove('playing'), soundTimeout);
    }
});