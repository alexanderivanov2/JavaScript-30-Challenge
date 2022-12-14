const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const inputSearch = document.querySelector('.search');
const ulElement = document.querySelector('.suggestions');
inputSearch.focus();

const getCities = async() => {
    const response = await fetch(endpoint);
    return await response.json();
}

const cities = await getCities();

inputSearch.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.key == 'Backspace') {
        inputSearch.value = inputSearch.value.slice(0, inputSearch.value.length - 1);
    } else if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 32){
        inputSearch.value += e.key;
    }

    const searchInput = inputSearch.value;
    const searchLength = searchInput.length;
    
    updateListWithResults(searchInput, searchLength);
});

function updateListWithResults(searchInput, searchLength) {
    const documentFragments = new DocumentFragment();

    cities.forEach(city => {
        const cityName = city.city;
        const stateName = city.state;
        const spanSeperator = document.createElement('span');
        spanSeperator.textContent = ', ';

        if ( searchLength >= 1 && (cityName.includes(searchInput) || stateName.includes(searchInput))) {
            const liElement = document.createElement('li');
            let pCityStateElement = document.createElement('p');
            const spanPopulationElement = document.createElement('span');

            pCityStateElement = updateParghCityStateElement(cityName, searchInput, searchLength, pCityStateElement);
            pCityStateElement.appendChild(spanSeperator);
            pCityStateElement = updateParghCityStateElement(stateName, searchInput, searchLength, pCityStateElement);
            
            spanPopulationElement.classList.add('population');
            spanPopulationElement.textContent = numberWithCommas(city.population);

            liElement.appendChild(pCityStateElement);
            liElement.appendChild(spanPopulationElement);
            documentFragments.appendChild(liElement);
        }
    });

    ulElement.replaceChildren(documentFragments);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateParghCityStateElement(name, search, searchLength, root) {
    let spanStartIndex = name.indexOf(search);
    let spanEndIndex =  spanStartIndex >= 0 ? spanStartIndex + searchLength : -1;
    for (let i = 0; i < name.length; i++) {
        let spanCharElement = document.createElement('span');
        spanCharElement.textContent += name[i];
        if (i >= spanStartIndex && i < spanEndIndex) {
            spanCharElement.classList.add('hl');
        }
        root.appendChild(spanCharElement);
    }
    return root;
}