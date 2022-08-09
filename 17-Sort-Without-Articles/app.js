const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ulElement = document.querySelector('#bands');
const regExpMatch = new RegExp('\\b[A|An||The]+\\s', 'i');
const isStartWithAnOrA = (txt) => regExpMatch.test(txt);

bands.sort((a, b) => {
    a = isStartWithAnOrA(a) ? a.split(' ').slice(1,).join(' ') : a;
    b = isStartWithAnOrA(b) ? b.split(' ').slice(1,).join('') : b;

    const result = a.localeCompare(b);
    return result;
});


const fragment = document.createDocumentFragment();

bands.forEach(band => {
    const liElement = document.createElement('li');
    liElement.textContent = band;
    fragment.appendChild(liElement);
});

ulElement.appendChild(fragment);