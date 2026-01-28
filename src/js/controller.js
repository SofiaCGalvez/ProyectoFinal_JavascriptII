
import recipeView from './views/RecipeView.js';
import searchView from './views/searchViews.js';
import resultsView from './views/ResultView.js';
import paginationView from './views/paginationView.js';
import * as model from "./model.js";


console.log(resultsView);
console.log('CONTROLLER CARGADO');


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// 👇 AQUÍ VA LO DEL EJERCICIO
const controlRecipes = async function () {
  try {

    console.log('HASH:', window.location.hash);
    const id =window.location.hash.slice(1);
    //console.log(id);

    // Validación
    if (!id) return;

    // Mostrar spinner
    recipeView.renderSpinner();

      // ii. llamar loadRecipe con await
    await model.loadRecipe(id);
    console.log('RECIPE:', model.state.recipe);

    // iii. desestructurar recipe desde state
    //const { recipe } = model.state;
    
    // Renderizar receta (VIEW)
    recipeView.render(model.state.recipe);

    console.log('Recipe:', model.state.recipe);
    // imprimir recipe
    //console.log(recipe);


  } catch (error) {
    recipeView.renderError();
  }
}


//controlRecipes();


/*window.addEventListener("hashchange", showRecipe);
window.addEventListener("load", showRecipe); */

/*const testSearch = async function () {
  try {
    await model.loadSearchResults('pizza');
    console.log(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

testSearch(); */

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery(); // por ahora fijo para probar

    if (!query) return;

    //Mostrar spinner
    resultsView.renderSpinner();

    await model.loadSearchResults(query);

    console.log('RESULTADOS:', model.state.search.results);

    resultsView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

const controlPagination = function (goToPage) {
  resultsView.render(
    model.getSearchResultsPage(goToPage)
  );

  paginationView.render(model.state.search);
};


const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();