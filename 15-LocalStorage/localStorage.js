export const getItems = () => {
    // debugger
    let items = localStorage.getItem('items');

    if (!items) {
        items = [];
    } else {
        items = JSON.parse(items)
    }
    return items;
};

export const setItems = (item) => {
    let items = getItems();

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
}