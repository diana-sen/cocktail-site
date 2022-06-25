import * as api from './api.js';

//const mainDiv = document.querySelector('#container-pokemons');
//const seachElement = document.querySelector('#search');
const NOT_IMAGE_TEXT = 'Not image found';
//let globalPokemons = [];


console.log(api.getRandomCocktails());

const renderCardCocktail = (element) => {
    
    const cardCocktailDiv = document.createElement('div');
    cardCocktailDiv.setAttribute('onclick', 'alert("Ok")');
    cardCocktailDiv.className = 'card';

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
  
    return cardCocktailDiv;
}

async function randomContainer () {
    const cardDeckDiv = document.createElement('div');
    cardDeckDiv.className = 'card-deck';
    const randomCocktails = await api.getRandomCocktails();
    randomCocktails.forEach( (cocktail) => {
        cardDeckDiv.appendChild(renderCardCocktail(cocktail));
    } );

    const randomCocktailContainer = document.getElementById('random-cocktail-container');
    randomCocktailContainer.appendChild(cardDeckDiv);
    
}

randomContainer();

/*
<div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

    </div>
  </div>


// de codepen: https://codepen.io/francoiscoron/pen/ExQLvYw
<div class="card">
			<div class="card__inner">
				<div class="card__pic">
					<img src="https://images.unsplash.com/photo-1611265023526-707d240623af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
				</div>
				<div class="card__content">
					<h2>I'am a card!</h2>
					<p>This is my content</p>
				</div>
			</div>
		</div>
*/