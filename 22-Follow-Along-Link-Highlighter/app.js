const aTags = document.querySelectorAll('a');
const span = document.querySelector('.highlight');
console.log(span);

aTags.forEach(aTag => {
    aTag.addEventListener('mouseover', (e) => {
        e.preventDefault();
        console.dir(e.target);
        console.log(e);
        console.log(e.target);
        const obj = {
            width: e.target.offsetWidth,
            height: e.target.offsetHeight,
            y: e.target.offsetParent.offsetTop + e.target.offsetTop ,
            x: e.target.offsetParent.offsetLeft + e.target.offsetLeft,
        }
        console.log(obj);

        span.style.width = obj.width  + 'px';
        span.style.height = obj.height  + 'px';
        span.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    });
});
