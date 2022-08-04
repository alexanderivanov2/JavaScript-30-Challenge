const videoEl = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const togglePlayBtn = document.getElementById('toggle__button');

console.log(progress.clientWidth);
let videoDuration;
let currentTime = 0;
console.dir(videoEl);

// Start app
videoEl.addEventListener('canplay', (e) => {
    e.preventDefault();
    console.log(e);
    videoDuration = e.target.duration;
    console.log(videoDuration)
});

//Event Listeners

// Play/Pause Button
togglePlayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const btnTarget = e.target;

    if (btnTarget.classList.contains("toggle")) {
        btnTarget.textContent = '||';
        videoEl.play();

    } else {
        btnTarget.textContent = '►'

        videoEl.pause(); 
    }
    btnTarget.classList.toggle('toggle');
});

// Video current time
videoEl.addEventListener('timeupdate', (e) => {
    e.preventDefault();
    let videoCurrentTime = e.target.currentTime;
    console.log(videoCurrentTime);
    updateProgressBar(videoCurrentTime);
});
// Update timebar
function updateProgressBar(currTime) {
    const flexBasisPercentageOnPlay = currTime / videoDuration * 100;
    changeProgressBarFlexBasis(flexBasisPercentageOnPlay)
}

function changeProgressBarFlexBasis(percentage) {
    progressBar.style.flexBasis = `${percentage}%`;
}

// timebar move video
progress.addEventListener('click', (e) => {
    e.preventDefault();

    const x = e.offsetX;
    const progressX = progress.offsetWidth;

    const flexBasisPercentageOnClick = x / progressX * 100;
    changeProgressBarFlexBasis(flexBasisPercentageOnClick);

    const calculateSeconds = flexBasisPercentageOnClick / 100 * videoDuration;
    videoEl.currentTime = calculateSeconds;
});