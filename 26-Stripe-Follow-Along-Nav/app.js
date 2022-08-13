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

function removeAll(currLi) {
    navLi.forEach(li =>  {
        if (li.textContent !== currLi.textContent)
        li.classList.remove('trigger-enter', 'trigger-enter-active')
    });
}

function mouseoverHandler(e, li) {
    removeAll(li);

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
    const liBoundaries = li.getBoundingClientRect();
    const hiddenContent = li.children[1];
    const boundaries = hiddenContent.getBoundingClientRect();
    const x = e.x;
    const y = e.y;

    if ((x < boundaries.left || x > boundaries.right ||y < liBoundaries.top || y > boundaries.bottom)) {
        dropdownBG.classList.remove('open');
        li.classList.remove('trigger-enter', 'trigger-enter-active');
    }
}

navLi.forEach(li => {
    li.addEventListener('mouseover', (e) => mouseoverHandler(e, li))
    li.addEventListener('mouseout', (e) => mouseoutHanlder(e, li));
});