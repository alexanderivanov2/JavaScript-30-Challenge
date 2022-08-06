import { videoEl, togglePlayBtn, videoSpeedInput } from './domElements.js';
import { updateProgressBar } from './progressBar.js';

const MAX_PLAYRATE = 2;
const MIN_PLAYRATE = 0;
let currPlayRate = videoEl.playbackRate;
const step = Number(videoSpeedInput.getAttribute('step'));

export function playAndStopPlayer(e) {
    if (e) {
        e.preventDefault();
    }


    if (togglePlayBtn.classList.contains("toggle")) {
        togglePlayBtn.textContent = '||';
        videoEl.play();

    } else {
        togglePlayBtn.textContent = '►'

        videoEl.pause(); 
    }
    togglePlayBtn.classList.toggle('toggle');
}

export function endVideo(e) {
    e.preventDefault();
    togglePlayBtn.classList.remove('toggle');
    playAndStopPlayer();
}

// move time
export function moveTime(e, key) {
    e.preventDefault();

    if (key == 'ArrowLeft' || key == '-10') {
        videoEl.currentTime -= 10;
    } else if (key == 'ArrowRight' || key == '25') {
        videoEl.currentTime += 25;
    }
}

// Update progressbar
export function videoCurrentTimeUpdate(e, videoDuration) {
    e.preventDefault();
    let videoCurrentTime = e.target.currentTime;
    updateProgressBar(videoCurrentTime, videoDuration);
}

export function changePlayrate(e, key) {
    e.preventDefault();
    if (key == 'ArrowDown') {
        currPlayRate = Math.max(0, currPlayRate - step);
    } else if (key == 'ArrowUp') {
        currPlayRate = Math.min(2, currPlayRate + step);
    } else {
        currPlayRate = e.target.value;
    }

    setPlayRate();
}

function setPlayRate() {
    videoEl.playbackRate = currPlayRate;
    console.log(videoEl.playbackRate);
}
