const canvasDrawElement = document.querySelector('#draw');
const canvasTitleElement = document.querySelector('#title');
const ctxTitle = canvasTitleElement.getContext('2d');
const ctxDraw = canvasDrawElement.getContext('2d');
const bounding = canvasDrawElement.getBoundingClientRect();
let isDraw = false;

// Set draw properties
let gradient = ctxDraw.createLinearGradient(0, 0,800, 0);
gradient.addColorStop(0, 'green');
gradient.addColorStop(0.1, 'orange');
gradient.addColorStop(.2, 'green');
gradient.addColorStop(.3, 'blue');
gradient.addColorStop(.4, 'pink');
gradient.addColorStop(.5, 'yellow');
gradient.addColorStop(.7, 'purple');



ctxDraw.strokeStyle = gradient;
ctxDraw.lineWidth = '10';

// Set title properties
console.log(ctxTitle)
ctxTitle.font = '72px Helvetica';
ctxTitle.fillText(`Let's Draw...`, 0, 64);
const cordinates = {
    x: 0,
    y: 0,
}

canvasDrawElement.addEventListener('mousedown', startDraw);
canvasDrawElement.addEventListener('mouseup', stopDraw);
canvasDrawElement.addEventListener('mousemove', draw);


function startDraw(e) {
    setCordinates(e);
    isDraw = true;
    console.log(`Start - x:${cordinates.x} - y:${cordinates.y}`);
    ctxDraw.beginPath();
    ctxDraw.moveTo(cordinates.x, cordinates.y);
}


function draw(e) {
    setCordinates(e);
   
    if (isDraw) {
        console.log(`Draw - x:${cordinates.x} - y:${cordinates.y}`);
        ctxDraw.lineTo(cordinates.x, cordinates.y);
        ctxDraw.stroke();
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