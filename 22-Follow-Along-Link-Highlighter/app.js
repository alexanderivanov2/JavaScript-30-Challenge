const aTags = document.querySelectorAll('a');
const span = document.querySelector('.highlight');

aTags.forEach(aTag => {
    aTag.addEventListener('mouseover', (e) => {
        e.preventDefault();

        const obj = {
            width: e.target.offsetWidth,
            height: e.target.offsetHeight,
            y: e.target.offsetParent.offsetTop + e.target.offsetTop ,
            x: e.target.offsetParent.offsetLeft + e.target.offsetLeft,
        }

        span.style.width = `${obj.width}px`;
        span.style.height = `${obj.height}px`;
        span.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    });
});
