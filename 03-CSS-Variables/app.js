const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const imgElement = document.querySelector('img');
const spanElement = document.querySelector('.hl');

spacing.addEventListener('change', changeSpacing);
spacing.addEventListener('mousemove', changeSpacing);
blur.addEventListener('change', changeBlur);
blur.addEventListener('mousemove', changeBlur);
base.addEventListener('change', changeBase);
base.addEventListener('mousemove', changeBase);

function changeSpacing(e) {
    const spacingValue = e.currentTarget.value;
    console.log(spacingValue);

    document.documentElement.style.setProperty('--spacing', `${spacingValue}px`);
}
    

function changeBlur(e) {
    const blurValue = e.currentTarget.value;
    document.documentElement.style.setProperty('--blur', `${blurValue}px`);
}

function changeBase(e) {
    const baseValue = e.currentTarget.value;
    document.documentElement.style.setProperty('--base', baseValue);
}