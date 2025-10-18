//helpers

//busca un elemento del HTML por su id. Ej. divInicio
//Si lo encuentra, le va a quitar la clase oculto
function mostrarComponente(id){
    let el = document.getElementById(id);
    if(el) el.classList.remove ("oculto")}


//Va a buscar su elemento id
//si lo encuentra le agrega a la clase de oculto
//oculta visualmente con el display none/css

function ocultarComponente(id){
    let el = document.getElementById(id);
    if(el) el.classList.add("oculto");
}

//Busca un input o textTarea dentro del html
//

function recuperarTexto(id){
    let el = document.getElementById(id)
    return el? el.value: "";
}