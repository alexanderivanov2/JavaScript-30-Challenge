const inboxElement = document.querySelector('.inbox');
const listOfItemsElements = Array.from(document.querySelectorAll('input'));
let isShiftPress = false;
const indexesArr = [];

inboxElement.addEventListener('click', onClickInBox);
window.addEventListener('keydown', onDown);
window.addEventListener('keyup', onUp);

function onDown(e) {
    const pressedKey = e.key;

    if (pressedKey == 'Shift') {
        isShiftPress = true;
    }
}

function onUp(e) {
    const pressedKey = e.key;

    if (pressedKey == 'Shift') {
        isShiftPress = false;
    }
    
}

function onClickInBox(e) {
    const clickedElement = e.target; 
    if (clickedElement.type == 'checkbox') {
        const indexOfElement = getIndex(clickedElement);

        if (clickedElement.checked) {
            addElement(indexOfElement);
          
        } else {
            removeIndex(indexOfElement);
        }
    }
}

function getIndex(el, arr=listOfItemsElements) {
    return arr.findIndex(i => i==el);
}

function removeIndex(el, arr=indexesArr) {
    const findIndex = arr.findIndex(i => el === i);
    
    if (findIndex) {
        arr.splice(findIndex, 1);
    }

}

function addElement(el, arr=indexesArr) {
    if (indexesArr.length == 1 && isShiftPress) {
        arr.push(el);
        arr.sort((a, b) => a - b);
        checkMultipleBoxes();
    } else {
        arr.splice(0, 1, el);
    }

}

function checkMultipleBoxes() {
    const [startIndex, endIndex] = [...indexesArr];
    // Checked checkboxes between start and end index
    for (let i = startIndex; i <= endIndex; i++) {
        listOfItemsElements[i].checked = true;
    }
    // Clear indexArr
    indexesArr.splice(0, 2);
}