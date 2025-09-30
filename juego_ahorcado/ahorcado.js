let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula = function (i) {
    let esMayuscula = i.charCodeAt(0);
    if (esMayuscula >= 65 && esMayuscula <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let caracter;
    let existeError = false;
    let todasMayusculas = true;
    let palabraIngresada = recuperarTexto("txtSecreta");
    if (palabraIngresada.length == 5) {
        existeError = false;
        for (let posicion = 0; posicion < palabraIngresada.length; posicion++) {
            caracter = palabraIngresada.charAt(posicion);
            let sonMayusculas = caracter.charCodeAt(0);
            if (sonMayusculas < 65 || sonMayusculas > 90) {
                todasMayusculas = false;
            }
        }
        if (todasMayusculas == true) {
            console.log(palabraIngresada);
            palabraSecreta = palabraIngresada;
        } else {
            alert("Debe ingresar una palabra completamente en mayusculas");
            existeError = true;
        }
    } else {
        alert("Debe ingresar una palabra de 5 letras");
        existeError = true
    }
}

mostrarLetra = function (letra, posicion) {
    mostrarTexto(`div${posicion}`, letra);
}

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let posicion = 0; posicion < palabraSecreta.length; posicion++) {
        if (palabraSecreta.charAt(posicion) == letra) {
            mostrarLetra(letra, posicion)
            letrasEncontradas++;
        }
    }
    coincidencias += letrasEncontradas;
    if (letrasEncontradas==0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra = function () {
    intentos++;
    let letraIngresada = recuperarTexto("txtLetra");
    if (letraIngresada.length == 1 && esMayuscula(letraIngresada)) {
        validar(letraIngresada);
        if (coincidencias == 5) {
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        }
        if (intentos == 10) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }
    if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }
    if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }
    if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }
    if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }
    if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }
    if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }
    if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }
    if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
}