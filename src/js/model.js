import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

console.log('MODEL CARGADO');

export const state= {  //state guarda la receta actual
    recipe: {},
    search: {
    query: '',
    results: []
  }
};

export async function loadRecipe(id){  //loadRecipe obtiene datos de la API / El controlador no llama la API directamente
    try{
        //Obtener datos desde la API usando helpers.js
        const data= await getJSON(`${API_URL}/${id}`);

         // b. declarar como const el objeto recipe
        const { recipe } = data.data;

        //Se normaliza la informacion
        state.recipe ={
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };


    } catch(err){
        //console.log(`${err} 💥💥💥💥`);
        throw err;
}
};


//Busqueda de recetas
export const loadSearchResults = async function (query) {
  try {
    //guardar el texto buscado
    state.search.query = query;

    //pedir datos a la API
    const data = await getJSON(`${API_URL}?search=${query}`);

    //Guardar resultados 
    state.search.results = data.data.recipes.map(rec => ({
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url
    }));
 // imprimir resultados
   // console.log(state.search.results);

  } catch (err) {
    console.log(`${err} 💥💥💥`);
    throw err;
  }
};