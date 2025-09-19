jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje","Es mayor a 3");
        cambiarTexto("lblMensaje2","GANASTE!");
    }else{
        cambiarTexto("lblMensaje","Es menor a 3");
        cambiarTexto("lblMensaje2", "Perdiste!");
    }
}

lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*6;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorDado=numeroEntero+1;
    return valorDado;
}