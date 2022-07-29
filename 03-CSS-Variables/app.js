const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const imgElement = document.querySelector('img');

changeSpacing();
changeBlur();
changeBase();

spacing.addEventListener('change', (e) => changeSpacing(e));
blur.addEventListener('change', (e) => changeBlur(e));
base.addEventListener('change', (e) => changeBase(e));

function changeSpacing(e) {
    if (e) {
        e.preventDefault();
    }   

    const spacingValue = spacing.value;
    imgElement.style.padding = `${spacingValue}px`;
}
    

function changeBlur(e) {
    if (e) {
        e.preventDefault();
    }
    
    const blurValue = blur.value;
    imgElement.style.filter = `blur(${blurValue}px)`
}

function changeBase(e) {
    if (e) {
        e.preventDefault();
    }  

    const baseValue = base.value;
    imgElement.style.background = baseValue;
}