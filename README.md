# cocktail-site

This website allows you to search for cocktails drinks. You can search them by name, ingredient or type of alcohol.


## How to clone this project:

```
git clone git@github.com:diana-sen/cocktail-site.git
```

## Technologies

- HTML
- CSS
- Javascript
- [TheCocktailDB API](https://www.thecocktaildb.com/api.php)

## API endpoints

* Get a random cocktail:

  ```
  GET www.thecocktaildb.com/api/json/v1/1/random.php
  ```
* Get a specific cocktail by ID:

  ```
  GET www.thecocktaildb.com/api/json/v1/1/lookup.php?i={drink-id}
  ```
* Search a list of cocktails by name (many cocktails may have a similar name):

  ```
  GET www.thecocktaildb.com/api/json/v1/1/search.php?s={cocktail-name}
  ```
* Search a list of cocktails by ingredient:

  ```
  GET www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient-name}
  ```

- Search by
