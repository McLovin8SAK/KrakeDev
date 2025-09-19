calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuentoAplicado=monto*porcentajeDescuento/100
    return descuentoAplicado;
}

calcularIva=function(monto){
    let valorIva=monto*12/100
    return valorIva;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let pagoTotal=(subtotal-descuento)+iva;
    return pagoTotal;
}