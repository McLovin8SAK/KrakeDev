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
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */