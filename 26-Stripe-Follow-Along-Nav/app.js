const navEl = document.querySelector('nav.top');
const dropdownBG = document.querySelector('.dropdownBackground');
const navLi = document.querySelectorAll('nav>ul.cool>li');

function changeSizesOfDropdownBG(liBoundaries) {
    dropdownBG.style.width = `${liBoundaries.width}px`;
    dropdownBG.style.height = `${liBoundaries.height}px`;
}

function moveDropdownBG(liBoundaries, hiddenContentBoundaries) {
    dropdownBG.style.transform = `translate(${hiddenContentBoundaries.x}px, ${liBoundaries.y}px)`;
}

function mouseoverHandler(e, li) {

    const liBoundaries = li.getBoundingClientRect();
    const hiddenContent = li.children[1];

    li.classList.add('trigger-enter');
    const hiddenContentBoundaries = hiddenContent.getBoundingClientRect();

    changeSizesOfDropdownBG(hiddenContentBoundaries);
    moveDropdownBG(liBoundaries, hiddenContentBoundaries);

    dropdownBG.classList.add('open');
    li.classList.add('trigger-enter-active');    
}

function mouseoutHanlder(e, li) {
    dropdownBG.classList.remove('open');
    li.classList.remove('trigger-enter', 'trigger-enter-active');
}

navLi.forEach(li => {
    li.addEventListener('mouseenter', (e) => mouseoverHandler(e, li))
    li.addEventListener('mouseleave', (e) => mouseoutHanlder(e, li));
});