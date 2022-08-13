const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const textareaEl = document.querySelector('textarea');

let voices = [];

const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();

let voiceList;



setTimeout(fillInputVoices, 60);

setTimeout(() => {
    voices = synth.getVoices();
}, 50);

function fillInputVoices() {
    console.log(voices);
    voices.forEach((voice, i) => {
        const optionEl = document.createElement('option');
        optionEl.textContent = `${i + 1}. ${voice.name}`;
        voicesDropdown.appendChild(optionEl);
    });
}

function speakText(e) {
    e.preventDefault();
    const txt = textareaEl.value;
    msg.text = txt;
    const selectedVoice = voicesDropdown.value;
    console.log(selectedVoice);
    let [index] = [...selectedVoice.split('.')];
    
    if (index) {
        index = Number(index);
        msg.voice = voices[index - 1];
    }
    synth.speak(msg);

}

speakButton.addEventListener('click', speakText);