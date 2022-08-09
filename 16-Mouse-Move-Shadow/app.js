const h1Element = document.querySelector('h1');
const divElement = document.querySelector('.hero');



window.addEventListener('mousemove', (e) => {
    e.preventDefault();
    const h1OffsetTop = h1Element.offsetTop;
    const h1offsetBottom = h1Element.offsetTop + h1Element.clientHeight;
    const h1OffsetLeft = h1Element.offsetLeft;
    const h1OffsetRight = h1OffsetLeft + h1Element.clientWidth;
    // console.log(h1Element);
    // console.log(`TOP: ${h1OffsetTop}\nBOTTOM: ${h1offsetBottom}\nLEFT: ${h1OffsetLeft}\nRIGHT: ${h1OffsetRight}`);
    // console.log(h1Element.style.textShadow)
    const y = e.offsetY;
    const x = e.offsetX;
    let shadowX = 10;
    let shadowY = 10;
    let color = 'black';
    if (y < h1OffsetTop) {
        shadowY = (h1OffsetTop - y) / 3;
        color = 'green';
    } else if ( y > h1OffsetTop) {
        shadowY = -((y- h1OffsetTop) / 3);
        color = 'blue';
    }

    // else if ( y > h1offsetBottom) {
    //     shadowY = -((y- h1offsetBottom) / 3);
    //     color = 'blue';
    // }

    if (x < h1OffsetLeft) {
        shadowX = (h1OffsetLeft - x) / 2;
    } else if ( x > h1OffsetLeft) {
        shadowX = -(x - h1OffsetLeft) / 2;
    }

    // else if ( x > h1OffsetRight) {
    //     shadowX = -(x - h1OffsetRight) / 2;
    // }


    h1Element.style.textShadow = `${shadowX}px ${shadowY}px 1px ${'green'},
     ${shadowX * - 1}px ${shadowY * -1}px 1px ${'red'}, 
     ${shadowY}px ${shadowX * - 1}px 1px ${'yellow'}, 
     ${shadowY * - 1}px ${shadowX}px 1px ${'blue'}`;
})