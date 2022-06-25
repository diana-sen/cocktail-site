

export const getRandomCocktails = async () => { 
    let cocktailArray =[];
    for (let i =1; i<=5; i++) {
        const response = await fetch('www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktailResponseJson = await response.json();
        const cocktail = mapCocktailData(cocktailResponseJson);
        cocktailArray.push(cocktail);
    }
    return cocktailArray;
};

const mapCocktailData = (rawDrink) => {
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

const cocktail = {
    idCocktail: rawDrink.drinks.idDrink,
    idCocktail2: rawDrink.drinks[0],
    name: rawDrink.drinks,
    category: rawDrinks.strCategory,
    image: rawDrink.strDrinkThumb,

    instructions: strInstructions
};
return cocktail;

}

/*const buildCocktail =  (name, imgResponseJson) => {
    const img = imgResponseJson?.sprites?.other['official-artwork']?.front_default || '';
    const pokemon = { name: name, img: img };
    globalPokemons.push(pokemon);
}; */
