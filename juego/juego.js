let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
    let elementoGenerado = generarElemento();
    generarRuta(elementoGenerado);
    let resultado = determinarGanador(seleccionado, elementoGenerado);
    if (resultado == 0) {
        mostrarTexto("lblResultado", "EMPATE");
    }
    if (resultado == 1) {
        mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("lblPuntajeUsuario", puntosUsuario);
        if(puntosUsuario==5){
            alert("HAS GANADO EL JUEGO");
        }
    }
    if (resultado == 2) {
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
        puntosComputador = puntosComputador + 1;
        mostrarTexto("lblPuntajeComputador", puntosComputador);
        if(puntosComputador==5){
            alert("EL COMPUTADOR TE HA VENCIDO");
        }
    }
}

limpiar=function(){
    mostrarImagen("imgJuego", src="");
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblPuntajeUsuario", "0");
    mostrarTexto("lblPuntajeComputador", "0");

}