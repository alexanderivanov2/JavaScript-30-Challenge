import { videoEl, progress, progressBar } from "./domElements.js";

export function progressBarUpdate(e, videoDuration) {
    e.preventDefault();

    const x = e.offsetX;
    const progressX = progress.offsetWidth;

    const flexBasisPercentageOnClick = x / progressX * 100;
    changeProgressBarFlexBasis(flexBasisPercentageOnClick);

    const calculateSeconds = flexBasisPercentageOnClick / 100 * videoDuration;
    videoEl.currentTime = calculateSeconds;
}


export function updateProgressBar(currTime, videoDuration) {
    const flexBasisPercentageOnPlay = currTime / videoDuration * 100;
    changeProgressBarFlexBasis(flexBasisPercentageOnPlay)
}

function changeProgressBarFlexBasis(percentage) {
    progressBar.style.flexBasis = `${percentage}%`;
}