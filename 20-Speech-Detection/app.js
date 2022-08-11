const divWords = document.querySelector('.words');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let speech = new SpeechRecognition();
speech.interimResults = true;
speech.lang = 'en-US';


p = document.createElement('p');
divWords.appendChild(p);

function writeResult(result) {
 

    divWords.appendChild(p);

    p.textContent = result;

}


function addNewParagraph(e) {
    e.preventDefault();
 
    if (p.textContent) {
        p = p.cloneNode();
        divWords.appendChild(p);
    }

}

speech.addEventListener('result', (e) => {
    let answer = Array.from(e.results)
        .map(res => res[0])
        .map(res => res.transcript)
        .join(' ');

    writeResult(answer);
});


speech.addEventListener('end', speech.start);
speech.addEventListener('end', addNewParagraph);


speech.start();