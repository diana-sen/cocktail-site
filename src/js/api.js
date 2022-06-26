
export const getRandomCocktails = async () => { 
    let cocktailArray =[];
    for (let i =1; i<=5; i++) {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktailResponseJson = await response.json();
        const cocktail = mapCocktailData(cocktailResponseJson.drinks[0]);
       // console.log(cocktail);
       // console.log(cocktailResponseJson);
        cocktailArray.push(cocktail);
        
    }
    return cocktailArray;
};

const mapCocktailData = (drink) => {
   /* {
        idCocktail : idDrink,
        name: strDrink;
        category: strCategory
        image: strDrinkThumb,
        ingredients: [{
        name: strIngredient#
        measure: strMeasure#
        }];
        instructions:strInstructions.split
        }
        */
//const drink =  rawDrink.drinks[0];
const cocktail = {
    idCocktail: drink.idDrink,
    name: drink.strDrink,
    category: drink.strCategory,
    image: drink.strDrinkThumb,

   // instructions: strInstructions
};
return cocktail;
};

/**
 * Search function by name 
 * @param {string} searchingText 
 */
export const searchCocktailsByName = async (searchingText) => { 
    let cocktailArray =[];
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchingText}`);
        const cocktailResponseJson = await response.json();
        cocktailResponseJson.drinks.forEach((searchDrink) => {
            const cocktail = mapCocktailData(searchDrink);
            cocktailArray.push(cocktail);
        }) ;
     
    return cocktailArray;  
    }



/*
const searchWithFilter = (searchingText) => {
    const filteredPokemon = globalPokemons.filter((pokemon) => {
        const { name } = pokemon;
        if (name.includes(searchingText)) {
            return pokemon;
        }
    });
    return filteredPokemon;
}

seachElement.addEventListener('keyup', (event) => {
    const inputText = event?.target?.value || '';
    let pokemosGlobal2 =  [ ...globalPokemons ]; // globalPokemons.slice(0, globalPokemons.length)
    pokemosGlobal2 = searchWithFilter(inputText);
    cleanView();
    renderPokemons(pokemosGlobal2);
});

*/
