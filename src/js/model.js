

export const state= {  //state guarda la receta actual
    recipe: {}
};

export async function loadRecipe(id){  //loadRecipe obtiene datos de la API / El controlador no llama la API directamente
    try{
        const resp= await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );

        // c. validación del estado de res
        if (!resp.ok) throw new Error("No se pudo obtener la receta");


        const data= await resp.json();

         // b. declarar como const el objeto recipe
        const { recipe } = data.data;

        //Guarda la receta en el state
        state.recipe= recipe;

        console.log(recipe);
        console.log(state.recipe);

    } catch(err){
        console.error(err);
}
}