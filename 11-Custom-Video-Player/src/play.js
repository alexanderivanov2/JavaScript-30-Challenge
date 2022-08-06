import { videoEl, togglePlayBtn } from './domElements.js';
import { updateProgressBar } from './progressBar.js';

export function playAndStopPlayer(e) {
    e.preventDefault();

    if (togglePlayBtn.classList.contains("toggle")) {
        togglePlayBtn.textContent = '||';
        videoEl.play();

    } else {
        togglePlayBtn.textContent = '►'

        videoEl.pause(); 
    }
    togglePlayBtn.classList.toggle('toggle');
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