
class SearchView{
    //elemento padre privado
    #parentEl= document.querySelector('.search');

    //obtener texto del input
    getQuery(){
        const query= this.#parentEl
        .querySelector('.search__field')
        .value;

        return query;
    }
    //listener para el click
    addHandlerSearch(handler){
        this.#parentEl.addEventListener('submit', function(e){
            e.preventDefault();
            handler();
        });
    }
}

//exporta una instancia
export default new SearchView();