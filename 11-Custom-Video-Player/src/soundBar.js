import { videoEl, soundSliderInput } from "./domElements.js";

const MAX_SOUND = 1;
const MIN_SOUND = 0;
let currVolume = videoEl.volume;
const step = soundSliderInput.getAttribute('step');

console.log(currVolume);
console.log(step);

export function changeVolume(e) {
    e.preventDefault();
    console.log(e.target.value);
    currVolume = e.target.value;
    setVolume();
}

function setVolume() {
    videoEl.volume = currVolume;
}