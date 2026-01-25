import RecipeView from './views/RecipeView.js';
import * as model from "./model.js";

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
async function showRecipe() {
  try {

    const id =window.location.hash.slice();
    console.log(id);

    // Validación
    if (!id) return;

    // Mostrar spinner
    recipeView.renderSpinner();

      // ii. llamar loadRecipe con await
    await model.loadRecipe(id);

    // iii. desestructurar recipe desde state
    //const { recipe } = model.state;
    
    // Renderizar receta (VIEW)
    recipeView.render(model.state.recipe);
    // imprimir recipe
    console.log(recipe);


  } catch (error) {
    alert(error);
  }
}

/*showRecipe();*/


/*window.addEventListener("hashchange", showRecipe);
window.addEventListener("load", showRecipe); */

["hashchange","load"].forEach(ev=>{
    window.addEventListener(ev, showRecipe);
});

