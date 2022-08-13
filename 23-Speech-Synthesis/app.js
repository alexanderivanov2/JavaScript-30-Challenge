const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const textareaEl = document.querySelector('textarea');

let voices = [];

const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();

setTimeout(fillInputVoices, 1000);

setTimeout(() => {
    voices = synth.getVoices();
}, 850);

function fillInputVoices() {
    voices.forEach((voice, i) => {
        const optionEl = document.createElement('option');
        optionEl.textContent = `${i + 1}. ${voice.name}`;
        voicesDropdown.appendChild(optionEl);
    });
}

function speakText(e) {
    e.preventDefault();
    if (synth.paused) {
        synth.resume();
    } else {
        const txt = textareaEl.value;
        msg.text = txt;
        const selectedVoice = voicesDropdown.value;
        let [index] = [...selectedVoice.split('.')];
        console.log(index);
        if (index) {
            index = Number(index);
            msg.voice = voices[index - 1];
        }
        msg.rate = options[0].value;
        msg.pitch = options[1].value;
        synth.speak(msg);
    }
}

speakButton.addEventListener('click', speakText);
stopButton.addEventListener('click', (e) => {
    e.preventDefault();
    synth.pause();
})