const canvasDrawElement = document.querySelector('#draw');
const canvasTitleElement = document.querySelector('#title');
const ctxTitle = canvasTitleElement.getContext('2d');
const ctxDraw = canvasDrawElement.getContext('2d');
const bounding = canvasDrawElement.getBoundingClientRect();
let isDraw = false;

ctxDraw.strokeStyle = '#BADA55';
ctxDraw.lineJoin = 'round';
ctxDraw.lineCap = 'round'

// Set title properties
ctxTitle.font = '72px Helvetica';
ctxTitle.fillText(`Let's Draw...`, 0, 64);

const cordinates = {
    x: 0,
    y: 0,
}
let hue = 0;
let lineSize = 1;

canvasDrawElement.addEventListener('mousedown', startDraw);
canvasDrawElement.addEventListener('mouseup', stopDraw);
canvasDrawElement.addEventListener('mousemove', draw);

function startDraw(e) {
    setCordinates(e);
    isDraw = true;
    ctxDraw.beginPath();
    ctxDraw.moveTo(cordinates.x, cordinates.y);
}


function draw(e) {
    setCordinates(e);
   
    if (isDraw) {
        ctxDraw.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctxDraw.lineWidth = lineSize;
        ctxDraw.lineTo(cordinates.x, cordinates.y);
        ctxDraw.stroke();
        hue++;
        lineSize++;
        if (lineSize >= 100) {
            lineSize = 1;
        }
    }
}

function stopDraw(e) {
    setCordinates(e);
    isDraw = false;
}

function setCordinates(event) {
    cordinates.x = event.offsetX;
    cordinates.y = event.offsetY;
}