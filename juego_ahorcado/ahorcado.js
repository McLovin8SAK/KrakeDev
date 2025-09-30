let palabraSecreta;

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

validar=function(letra){
    let letrasEncontradas=0;
    for(let posicion=0;posicion<palabraSecreta.length;posicion++){
        if(palabraSecreta.charAt(posicion)==letra){
            mostrarLetra(letra,posicion)
            letrasEncontradas++;
        }
    }
}

ingresarLetra=function(){
    let letraIngresada=recuperarTexto("txtLetra");
    if(letraIngresada.length==1 && esMayuscula(letraIngresada)){
        validar(letraIngresada);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");    
    }
}