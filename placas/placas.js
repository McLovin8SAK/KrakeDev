validarPlaca = function () {
    let valorPlaca;
    let erroresEstructura;
    valorPlaca = recuperarTexto("txtCajaPlaca");
    erroresEstructura = validarEstructura(valorPlaca);
    if (erroresEstructura == null) {
        mostrarTexto("lblRespuesta", "ESTRUCTURA VALIDA");
        mostrarTexto("lblErroresValidacion","");
    
        let placaProvincia = obtenerProvincia(valorPlaca);
        if(placaProvincia!=null){
            mostrarTexto("lblProvincia", "La placa pertenece a "+placaProvincia);
        }else{
            mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
        }

        let tipoVehiculo = obtenerTipoVehiculo(valorPlaca);
        if(tipoVehiculo!=null){
            mostrarTexto("lblVehiculo", tipoVehiculo);
        }else{
            mostrarTexto("lblVehiculo", "Vehiculo incorrecto");
        }
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(valorPlaca);
        mostrarTexto("lblPicoYPlaca", diaPicoYPlaca);
    } else {
        mostrarTexto("lblRespuesta", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErroresValidacion", "Los errores son: " + erroresEstructura);
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblVehiculo", "");
    }
}