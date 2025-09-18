mostrarImagen=function(idComponente,rutaImagen){
    let imgComponente;
    imgComponente=document.getElementById(idComponente);
    imgComponente.src=rutaImagen;
}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

//para limpiar la caja de texto
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;   
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valorCajaFloat=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorCajaFloat);
    return valorFloat;
}