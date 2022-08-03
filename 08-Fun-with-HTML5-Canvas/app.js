const canvasElement = document.querySelector('#draw');
const ctx = canvasElement.getContext('2d');
const bounding = canvasElement.getBoundingClientRect();
let isDraw = false;
ctx.strokeStyle = 'blue';

const cordinates = {
    x: 0,
    y: 0,
}

canvasElement.addEventListener('mousedown', startDraw);
canvasElement.addEventListener('mouseup', stopDraw);
canvasElement.addEventListener('mousemove', draw);


function startDraw(e) {
    setCordinates(e);
    isDraw = true;
    console.log(`Start - x:${cordinates.x} - y:${cordinates.y}`);
    ctx.beginPath();
    ctx.moveTo(cordinates.x, cordinates.y);
}


function draw(e) {
    setCordinates(e);
   
    if (isDraw) {
        console.log(`Draw - x:${cordinates.x} - y:${cordinates.y}`);
        ctx.lineTo(cordinates.x, cordinates.y);
        ctx.stroke();
    }
}

function stopDraw(e) {
    setCordinates(e);
    console.log('stop');
    isDraw = false;
}

function setCordinates(event) {
    cordinates.x = event.clientX - bounding.left;
    cordinates.y = event.clientY - bounding.top;
    cordinates.x = event.offsetX;
    cordinates.y = event.offsetY;
    if (isDraw) {
        console.log(cordinates);
    }
}