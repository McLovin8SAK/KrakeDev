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

    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA)
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal",valorTotal.toFixed(2));
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */