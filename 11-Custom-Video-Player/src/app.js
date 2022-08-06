import * as domEl from './domElements.js';
import { moveTime, playAndStopPlayer, videoCurrentTimeUpdate } from './play.js';
import { progressBarUpdate } from './progressBar.js';
import { changeVolume } from './soundBar.js';


// console.log(progress.clientWidth);
let videoDuration;
let currentTime = 0;
console.dir(domEl.videoEl);
console.log(domEl.videoEl.volume);
domEl.videoEl.volume = 0.10;

// Start app
domEl.videoEl.addEventListener('canplay', (e) => {
    e.preventDefault();
    console.log(e);
    videoDuration = e.target.duration;
    console.log(videoDuration)
});

//Event Listeners
//Buttons configuration
window.addEventListener('keydown', keysHandler);
// Play/Pause Button
domEl.togglePlayBtn.addEventListener('click', playAndStopPlayer);
// Video current time
domEl.videoEl.addEventListener('timeupdate', (e) => videoCurrentTimeUpdate(e, videoDuration));
// progressBar move video event listener
domEl.progress.addEventListener('click', (e) => progressBarUpdate(e, videoDuration));
// soundBar change volume
domEl.soundSliderInput.addEventListener('change', changeVolume);

// move forward and backwart movie
domEl.playerButtonsMove.forEach(btn => btn.addEventListener('click', (e) => moveTime(e, btn.getAttribute('data-skip'))));


function keysHandler(e) {
    e.preventDefault();

    const key = e.code;

    const handlers = {
        ArrowRight: (e, key) => moveTime(e, key),
        ArrowLeft: (e, key) => moveTime(e, key),
        ArrowUp: '',
        ArrowDown: '',
        Space: (e) => playAndStopPlayer(e),
    }

    if(handlers.hasOwnProperty(key)) {
        handlers[key](e, key);
    }

}

