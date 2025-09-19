calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto=recuperarTexto("txtProducto");
    precioProducto=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal",valorSubtotal);

    valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    mostrarTexto("lblDescuento",valorDescuento);

    let valorSinIva=valorSubtotal-valorDescuento;
    valorIVA=calcularIva(valorSinIva);

    mostrarTexto("lblValorIVA",valorIVA.toFixed(2));

    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA)
    mostrarTexto("lblTotal",valorTotal.toFixed(2));
            
    mostrarTexto("lblResumen","Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento es "+valorTotal);
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtPrecio","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTextoEnCaja("txtPorcentajeDescuento","");

    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}