import { videoEl, soundSliderInput } from "./domElements.js";

const MAX_SOUND = 1;
const MIN_SOUND = 0;
let currVolume = videoEl.volume;
const step = Number(soundSliderInput.getAttribute('step'));


export function changeVolume(e, key) {
    e.preventDefault();
    if (key == 'ArrowDown') {
        currVolume = Math.max(0, currVolume - step);
    } else if (key == 'ArrowUp') {
        currVolume = Math.min(1, currVolume + step);
    } else {
        currVolume = e.target.value;
    }

    setVolume();
}

function setVolume() {
    videoEl.volume = currVolume;
}
