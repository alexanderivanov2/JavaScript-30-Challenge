const drumKeys = {
    KeyA: {'data-key': '65'},
    KeyS: {'data-key':'83'},
    KeyD: {'data-key':'68'},
    KeyF: {'data-key':'70'},
    KeyG: {'data-key':'71'},
    KeyH: {'data-key':'72'},
    KeyJ: {'data-key':'74'},
    KeyK: {'data-key':'75'},
    KeyL: {'data-key':'76'},
}

window.addEventListener('load', (e) => {
    e.preventDefault();
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }));
});

window.addEventListener('keydown', (e) => {
    // e.preventDefault();
    const pressedKey = e.code;
    const drumKey = drumKeys[pressedKey];

    if (drumKey) {
        const dataKey = drumKey['data-key'];

        const divDrumKey = document.querySelector(`div[data-key="${dataKey}"]`);
        const audioDrumKey = document.querySelector(`audio[data-key="${dataKey}"]`);    

        divDrumKey.classList.add('playing');
        audioDrumKey.currentTime = 0;
        audioDrumKey.play();
    }
});
