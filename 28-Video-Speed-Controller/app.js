const speedDiv = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');


speedDiv.addEventListener('mousemove', (e) => {
    // console.dir(e);
    const speedBarHeight = e.offsetY > 410 ? 410 : e.offsetY; 
    const videoSpeed = speedBarHeight / 100;
    speedBar.textContent = `${videoSpeed.toFixed(1)}x`;
    speedBar.style.height = `${speedBarHeight}px`;

    video.playbackRate = Math.max(Number(videoSpeed), 0.1);
});