obtenerAleatorio = function () {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 3;
    let numeroEntero = parseInt(numeroMultiplicado);
    let numeroJuego = numeroEntero + 1;
    return numeroJuego;
}

generarElemento = function () {
    let elemento = obtenerAleatorio();
    if (elemento == 1) {
        return "piedra";
    }
    if (elemento == 2) {
        return "papel";
    }
    if (elemento == 3) {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0;
    }
    if ((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
        (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")) {
        return 1;
    }
    return 2;
}

generarRuta = function (nombre) {
    if (nombre == "piedra") {
        mostrarImagen("imgJuego", "./imagenes/piedra.png");
    } else if (nombre == "papel") {
        mostrarImagen("imgJuego", "./imagenes/papel.png");
    } else if (nombre == "tijera") {
        mostrarImagen("imgJuego", "./imagenes/tijera.png");
    }
}