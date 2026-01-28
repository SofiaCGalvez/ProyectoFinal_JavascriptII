
class SearchView{
    //elemento padre privado
    _parentElement= document.querySelector('.search');

    //obtener texto del input
    getQuery(){
        const query= this._parentElement
        .querySelector('.search__field')
        .value;
        this._clearInput();

        return query;
    }
    //listener para el click
    addHandlerSearch(handler){
        this._parentElement.addEventListener('submit', function(e){
            e.preventDefault();
            handler();
        });
    }

    _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
    }
}

//exporta una instancia
export default new SearchView();