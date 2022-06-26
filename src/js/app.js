import * as api from './api.js';

//const mainDiv = document.querySelector('#container-pokemons');
//const seachElement = document.querySelector('#search');
const NOT_IMAGE_TEXT = 'Not image found';
//let globalPokemons = [];
const SEARCH_RESULTS = 'searchResults';

const cleanView = (element) => {
    element.innerHTML = '';
}

const renderCardCocktail = (element) => {

    const card = document.createElement('div');
    card.className = 'p-2';
    
    const cardCocktailDiv = document.createElement('div');
    cardCocktailDiv.setAttribute('onclick', 'alert("Ok")');
    cardCocktailDiv.className = 'card custom-card';
    card.appendChild(cardCocktailDiv);

    const cocktailImg = document.createElement('img');
    cocktailImg.setAttribute('src', element.image);
    cocktailImg.setAttribute('alt', NOT_IMAGE_TEXT);
    cocktailImg.className = 'card-img-top';
    cardCocktailDiv.appendChild(cocktailImg);

    const cardCocktailSubDiv = document.createElement('div');
    cardCocktailSubDiv.className = 'card-body';
    cardCocktailDiv.appendChild(cardCocktailSubDiv);

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = element.name;
    cardCocktailSubDiv.appendChild(cardTitle);

    const cardCategory = document.createElement('p');
    cardCategory.className = 'card-text';
    cardCategory.innerHTML = `Category: ${element.category}`;
    cardCocktailSubDiv.appendChild(cardCategory);
  
    return card;
}

async function loadRandomContainer () {
    const randomCocktailContainer = document.getElementById('random-cocktail-container');
    if (randomCocktailContainer){
        const cardDeckDiv = document.createElement('div');
        cardDeckDiv.className = 'row justify-content-start';
        const randomCocktails = await api.getRandomCocktails();
        randomCocktails.forEach( (cocktail) => {
            cardDeckDiv.appendChild(renderCardCocktail(cocktail));
        } );
        cleanView(randomCocktailContainer);
        randomCocktailContainer.appendChild(cardDeckDiv); 
    }
};

 const runSearch = async (inputSearchText) => {
    const searchResults = await api.searchCocktailsByName(inputSearchText);
    console.log(searchResults);
    localStorage.setItem(SEARCH_RESULTS, JSON.stringify(searchResults));
};  

// Listen to form event
const addSearchFormListener = () => { 
    const formElementSearch = document.querySelector('#search-form');
    formElementSearch.addEventListener('submit', (event) => {
        // evitar que el formulario se envie por defecto
        event.preventDefault(); 
        // obtener los elementos html
    const keywordInputElement = event.target.searchBox;
        if (!keywordInputElement?.value) {
            return;
        }
        // obtener los value de los elementos html
        const searchText = keywordInputElement.value;
        runSearch(searchText);
    // cleanView();
    // randomContainer();
    });
};

//get  localStorage data
const getSearchResults = () => {
    return JSON.parse(localStorage.getItem(SEARCH_RESULTS));   
    //filtrar por nombre y categoría
}

 const loadSearchResultsContainer = () => {
    console.log("entra");
    const resultsCocktailContainer = document.getElementById('results-cocktail-container');
    if (resultsCocktailContainer){

        const cardDeckDiv = document.createElement('div');
        cardDeckDiv.className = 'row justify-content-start';
        const searchResultsCocktails = getSearchResults();
        searchResultsCocktails.forEach((cocktail) => {
            cardDeckDiv.appendChild(renderCardCocktail(cocktail));
        } );
        
        cleanView(resultsCocktailContainer);
        resultsCocktailContainer.appendChild(cardDeckDiv);   
    } //luego meter else, alerta
};

const loadIndexListenerAndContainer = () => {
    addSearchFormListener();
    loadRandomContainer();
    
}
window.loadIndexListenerAndContainer = loadIndexListenerAndContainer;
window.loadSearchResultsContainer = loadSearchResultsContainer;

