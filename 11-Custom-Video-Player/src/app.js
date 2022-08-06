import * as domEl from './domElements.js';
import { changePlayrate, endVideo, moveTime, playAndStopPlayer, videoCurrentTimeUpdate } from './play.js';
import { progressBarUpdate } from './progressBar.js';
import { changeVolume } from './soundBar.js';

let videoDuration;

//Event Listeners
// Start app
domEl.videoEl.addEventListener('canplay', (e) => {
    e.preventDefault();
    videoDuration = e.target.duration;
});

// End Video
domEl.videoEl.addEventListener('ended', endVideo);
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
// playrate change
domEl.videoSpeedInput.addEventListener('change', changePlayrate)
// move forward and backwart movie
domEl.playerButtonsMove.forEach(btn => btn.addEventListener('click', (e) => moveTime(e, btn.getAttribute('data-skip'))));


function keysHandler(e) {
    e.preventDefault();

    const key = e.code;

    const handlers = {
        ArrowRight: (e, key) => moveTime(e, key),
        ArrowLeft: (e, key) => moveTime(e, key),
        ArrowUp: (e, key) => changeVolume(e, key),
        ArrowDown: (e, key) => changeVolume(e, key),
        Space: (e) => playAndStopPlayer(e),
    }

    if(handlers.hasOwnProperty(key)) {
        handlers[key](e, key);
    }

}

// Full Screen
domEl.player.addEventListener('dblclick', (e) => {
    e.preventDefault();
    console.log('full');
    domEl.player.classList.toggle('fullscreen');
})
