validarPassword = function (password) {
    let caracter;
    let existeError = false;
    let errores = "";
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;
    if (password.length < 8 || password.length > 16) {
        errores = errores + "La contrasena debe tener un mínimo de 8 caracteres y un maximo de 16";
        existeError = true;
    }
    for (let posicion = 0; posicion < password.length; posicion++) {
        caracter = password.charAt(posicion);
        let codigo = caracter.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
            tieneMayuscula = true
        }
        if (codigo >= 48 && codigo <= 57) {
            tieneDigito = true;
        }
        if (codigo == 42 || codigo == 45 || codigo == 95) {
            tieneEspecial = true;
        }
    }
    if (tieneMayuscula == false) {
        errores = errores + "La contrasena debe tener al menos una letra mayuscula";
        existeError = true;
    }
    if (tieneDigito == false) {
        errores = errores + "La contrasena debe tener al menos un digito";
        existeError = true;
    }
    if (tieneEspecial == false) {
        errores = errores + "La contrasena debe tener al menos un caracter especial";
        existeError = true;
    }
    if (existeError == true) {
        return errores;
    } else {
        return "";
    }
}


ejecutarValidacion = function () {
    let contrasena;
    contrasena = recuperarTexto("txtContrasena");
    contrasenaAValidar = validarPassword(contrasena);
    if (contrasenaAValidar == "") {
        mostrarTexto("lblContrasena", "PASSWORD CORRECTO");
    } else {
        mostrarTexto("lblContrasena", contrasenaAValidar);
    }
}


