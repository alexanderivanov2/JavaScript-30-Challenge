const allPanelElements = document.querySelectorAll('.panel');
console.log(allPanelElements);

allPanelElements.forEach(panel => panel.addEventListener('click', flexTranformation));

function flexTranformation(e) {
    e.preventDefault();
    
    const panel = e.currentTarget;
    panel.classList.toggle('chosenOne');
}