import { getItems, setItems } from "./localStorage.js";

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');



function createDOMElements(item, i) {
    const fragment = document.createDocumentFragment();
    const liElement = document.createElement('li');
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');

    labelElement.setAttribute('for', item.item);
    labelElement.textContent = item.item;
    inputElement.name = item.item;
    inputElement.id = item.item;
    inputElement.setAttribute('data-index', i);
    inputElement.type = 'checkbox';
    if (item.done) inputElement.setAttribute('checked', 'true');
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
        const dataIndex = inputEl.getAttribute('data-index');

        if (isChecked) {
            inputEl.removeAttribute('checked');
        } else {
            inputEl.setAttribute('checked', true);
        }

        items[dataIndex].done = isChecked ? false : true;
        localStorage.setItem('items', JSON.stringify(items));
    }
}

// onSubmit Handler
function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plate = formData.get('item');

    setItems(plate);
    items = getItems();

    itemsList.appendChild(createDOMElements({item: plate, done: false}, items.length - 1));
    
    e.target.reset();
}

// form submit event listener
addItems.addEventListener('submit', onSubmit);
itemsList.addEventListener('click', onClickPlate);

//initial load items
let items = getItems();
// fill first list;
if (items) {
    const fragment = document.createDocumentFragment();
    items.forEach((item, i) => fragment.appendChild(createDOMElements(item, i)));
    itemsList.replaceChildren(fragment); 
}
