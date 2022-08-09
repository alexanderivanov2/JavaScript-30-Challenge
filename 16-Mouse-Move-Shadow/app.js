const h1Element = document.querySelector('h1');

window.addEventListener('mousemove', (e) => {
    e.preventDefault();
    const h1OffsetTop = h1Element.offsetTop;
    const h1OffsetLeft = h1Element.offsetLeft;

    const y = e.offsetY;
    const x = e.offsetX;
    let shadowX = 10;
    let shadowY = 10;

    if (y < h1OffsetTop) {
        shadowY = (h1OffsetTop - y) / 3;
    } else if ( y > h1OffsetTop) {
        shadowY = -((y- h1OffsetTop) / 3);
    }

    if (x < h1OffsetLeft) {
        shadowX = (h1OffsetLeft - x) / 2;
    } else if ( x > h1OffsetLeft) {
        shadowX = -(x - h1OffsetLeft) / 2;
    }

    h1Element.style.textShadow = `${shadowX}px ${shadowY}px 1px ${'green'},
     ${shadowX * - 1}px ${shadowY * -1}px 1px ${'red'}, 
     ${shadowY}px ${shadowX * - 1}px 1px ${'yellow'}, 
     ${shadowY * - 1}px ${shadowX}px 1px ${'blue'}`;
})