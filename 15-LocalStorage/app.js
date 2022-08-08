import { getItems, setItems } from "./localStorage.js";

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

//initial load items
let items = getItems();
// fill first list;
if (items) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const liElement = document.createElement('li');

        liElement.textContent = item;
        fragment.appendChild(liElement);
        
    });
    itemsList.replaceChildren(fragment); 
}

// form submit event listener
addItems.addEventListener('submit', onSubmit);


// debugger
// console.log(getItems());
// setItems('AAA');
// setItems('AA');
// setItems('A');
// console.log(getItems());