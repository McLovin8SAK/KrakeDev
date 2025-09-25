calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto("txtProducto");
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");
    if (esProductoValido(nombreProducto) & esCantidadValida(cantidad) & esPrecioValido(precioProducto)) {

        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);

        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);

        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

        valorIVA = calcularIVA(valorSubtotal - valorDescuento);

        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

        mostrarTexto("lblTotal", valorTotal.toFixed(2));
    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }

}

limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblCampoError", "");
    mostrarTexto("lblCampoError2", "");
    mostrarTexto("lblCampoError3", "");
}

esProductoValido = function (nombreProducto) {
    let sinErrores = true;
    if (nombreProducto == "") {
        mostrarTexto("lblCampoError", "*CAMPO OBLIGATORIO");
        sinErrores = false;
    }

    let limiteLetras = nombreProducto.length;
    if (limiteLetras > 10) {
        mostrarTexto("lblCampoError", "No puede tener mas de 10 caracteres");
        sinErrores = false;
    }
    if (sinErrores == true) {
        mostrarTexto("lblCampoError", "");
    }
    return sinErrores;
}

esCantidadValida = function (cantidad) {
    let sinErrores = true;
    if (isNaN(cantidad)) {
        mostrarTexto("lblCampoError2", "*CAMPO OBLIGATORIO");
        sinErrores = false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblCampoError2", "Debe ser un numero entre 0 y 100");
        sinErrores = false;
    }
    if (sinErrores == true) {
        mostrarTexto("lblCampoError2", "");
        sinErrores = true;
    }
    return sinErrores;
}

esPrecioValido = function (precioProducto) {
    let sinErrores = true;
    if (isNaN(precioProducto)) {
        mostrarTexto("lblCampoError3", "*CAMPO OBLIGATORIO");
        sinErrores = false;
    }
    if (precioProducto < 0 || precioProducto > 50) {
        mostrarTexto("lblCampoError3", "Debe ser un numero entre 0 y 50");
        sinErrores = false;
    }
    if (sinErrores == true) {
        mostrarTexto("lblCampoError3", "");
        sinErrores = true;
    }
    return sinErrores;
}