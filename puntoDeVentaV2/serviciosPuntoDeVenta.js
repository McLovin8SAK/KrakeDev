calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuentoAplicado=monto*porcentajeDescuento/100
    return descuentoAplicado;
}

calcularIVA=function(monto){
    let valorIva=(monto*12)/100
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

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuentoVolumen;
    if(cantidad<3){
        descuentoVolumen=0
    }else if(cantidad>=3 && cantidad<=5){
        descuentoVolumen=subtotal*0.03;
    }else if(cantidad>=6 && cantidad<=11){
        descuentoVolumen=subtotal*0.04;
    }else if(cantidad>=12){
        descuentoVolumen=subtotal*0.05;
    }
    return descuentoVolumen;
}