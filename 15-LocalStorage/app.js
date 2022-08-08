import { getItems, setItems } from "./localStorage.js";

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');



function createDOMElement(item) {
    const fragment = document.createDocumentFragment();
    const liElement = document.createElement('li');
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');

    labelElement.setAttribute('for', item);
    labelElement.textContent = item;
    inputElement.name = item;
    inputElement.type = 'checkbox';
    liElement.appendChild(inputElement);
    liElement.appendChild(labelElement);

    fragment.appendChild(liElement);
    return fragment;
}

function onClickPlate(e) {
    e.preventDefault();

    const clickedTarget = e.target;
    const clickedName = clickedTarget.tagName;
    let inputEl;

    if ( clickedName == 'LABEL') {
        inputEl = clickedTarget.previousSibling;
    } else if (clickedName == 'LI') {
        inputEl = clickedTarget.children[0];
    }

    if (inputEl) {
        const isChecked = inputEl.getAttribute('checked');
        if (isChecked) {
            inputEl.removeAttribute('checked');
        } else {
            inputEl.setAttribute('checked', true);
        }
    }
}

// onSubmit Handler
function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plate = formData.get('item');

    addItems.querySelector('input').value = '';
    setItems(plate);
    itemsList.appendChild(createDOMElement(plate));
}

// form submit event listener
addItems.addEventListener('submit', onSubmit);
itemsList.addEventListener('click', onClickPlate);

//initial load items
let items = getItems();
// fill first list;
if (items) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => fragment.appendChild(createDOMElement(item)));
    itemsList.replaceChildren(fragment); 
}
