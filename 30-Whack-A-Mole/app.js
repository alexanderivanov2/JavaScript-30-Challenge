const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const buttonStart = document.querySelector('button');
let timeUp = true;

const holesMole = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
}

function getMoleTime() {
    return Math.max(500, ((Math.random()* 1.5) * 1000));
}

function getRandomHole() {
    return Math.floor(Math.random() * 6);
}

function getHole() {
    let isFree = false;

    while (!isFree) {
        const n = getRandomHole();
        if (!holesMole[`${n}`]) {
            isFree = true;
            return Math.max(0, n - 1);
        }
    }
}

function showAndHideMole(hole, time) {
    holes[hole].classList.add('up');
    holesMole[`${hole}`] = true
    setTimeout(() => {
        holes[hole].classList.remove('up');
        holesMole[`${hole}`] = false;
    }, time);
}

function moveMoles() {
    const time = getMoleTime();
    const hole = getHole();

    showAndHideMole(hole, time);
    
    if (!timeUp) {
        setTimeout(() => moveMoles(), 750);
    }
   
}

function hitMole(e) {
    e.preventDefault();
    e.target.parentNode.classList.remove('up');
    let score = Number(scoreBoard.textContent) + 1;
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', (e) => hitMole(e)));

buttonStart.addEventListener('click', (e) => {
    scoreBoard.textContent = '0';
    timeUp = false;
    setTimeout(() => {
        timeUp = true;
    }, 10000);
    moveMoles();
});