const allPanelElements = document.querySelectorAll('.panel');
console.log(allPanelElements);

allPanelElements.forEach(panel => panel.addEventListener('click', flexTranformation));

function flexTranformation(e) {
    e.preventDefault();
    console.log('hi');
    const panel = e.currentTarget;
    const p1 = panel.children[0];
    const p2 = panel.children[2];
    const panelFlexGrow = panel.style.flexGrow;
    console.log(panelFlexGrow);
    if (panelFlexGrow == '' || panelFlexGrow == '1') {
        p1.classList.remove('closed');
        p2.classList.remove('closed');
        p1.classList.add('openPanelOne');
        p2.classList.add('openPanelTwo');
        panel.style.flexGrow = '5';
    } else {
        panel.style.flexGrow = '1';
        p1.classList.remove('openPanelOne');
        p2.classList.remove('openPanelTwo');
        p1.classList.add('closed');
        p2.classList.add('closed');

    }
    console.log(panel.style.flexGrow);
}