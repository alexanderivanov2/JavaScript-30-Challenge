const allPanelElements = document.querySelectorAll('.panel');
console.log(allPanelElements);

allPanelElements.forEach(panel => panel.addEventListener('click', flexTranformation));

function flexTranformation(e) {
    e.preventDefault();
    console.log('hi');
    const panel = e.currentTarget;
    const p1 = panel.children[0];
    const pMiddle = panel.children[1];
    const p2 = panel.children[2];
    const panelFlexGrow = panel.style.flexGrow;
    console.log(panelFlexGrow);
    if (panelFlexGrow == '' || panelFlexGrow == '1') {
        p1.classList.remove('closed');
        p2.classList.remove('closed');
        
        p1.classList.remove('closePanelOne');
        p2.classList.remove('closePanelTwo');
        pMiddle.style.fontSize = "8rem";
        // pMiddle.classList.add('openMiddle');
        p1.classList.add('openPanelOne');
        p2.classList.add('openPanelTwo');

        panel.style.flexGrow = '5';
    } else {
        
        pMiddle.classList.remove('.OpenMiddle')
        p1.classList.remove('openPanelOne');
        p2.classList.remove('openPanelTwo');

        pMiddle.style.fontSize = "4rem";
        p1.classList.add('closePanelOne');
        p2.classList.add('closePanelTwo');

        panel.style.flexGrow = '1';

        setTimeout(() => {
            p1.classList.add('closed');
            p2.classList.add('closed');
        }, 1000);

    }
}