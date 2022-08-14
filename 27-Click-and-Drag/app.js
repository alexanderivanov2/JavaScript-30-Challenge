const slider = document.querySelector('.items');
const itemElements = document.querySelectorAll('.item');

let pressed = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    pressed = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    pressed = false; 
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    pressed = false;
    slider.classList.remove('active'); 
});

slider.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
});