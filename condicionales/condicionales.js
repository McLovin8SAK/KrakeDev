calcularTasaInteres=function(ingresoAnual){
    let ingresosEmpresa=parseFloat(ingresoAnual);
    if(ingresosEmpresa<300000){
        return ingresosEmpresa*16/100;
    }else if(ingresosEmpresa>=300000 && ingresosEmpresa<500000){
        return ingresosEmpresa*15/100;
    }else if(ingresosEmpresa>=500000 && ingresosEmpresa<1000000){
        return ingresosEmpresa*14/100;
    }else if(ingresosEmpresa>=1000000 && ingresosEmpresa<2000000){
        return ingresosEmpresa*13/100;
    }else if(ingresosEmpresa>=2000000){
        return ingresosEmpresa*12/100;
    }
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let edadInt=parseInt(edad);
    let ingresosFloat=parseFloat(ingresos);
    let egresosFloat=parseFloat(egresos);
    let dineroTotal=ingresosFloat-egresosFloat;
    if(edadInt>50){
        return dineroTotal*30/100;
    }else if(edadInt<=50){
        return dineroTotal*40/100;
    }
}

calcularDescuento=function(precio,cantidad){
    let cantidadInt=parseInt(cantidad);
    let precioFloat=parseFloat(precio);
    if(cantidadInt<3){
        return precioFloat;
    }else if(cantidadInt>=3 && cantidadInt<=5){
        return precioFloat*2/100;
    }else if(cantidadInt>=6 && cantidadInt<=11){
        return precioFloat*3/100;
    }else if(cantidadInt>=12){
        return precioFloat*4/100;
    }
}

determinarColesterolLDL=function(nivelColesterol){
    let nivelColesterolFloat=parseFloat(nivelColesterol);
    if(nivelColesterolFloat<100){
        return "Su nivel de colesterol LDL es bajo: SALUDABLE";
    }else if(nivelColesterolFloat>=100){
        return "Su nivel de colesterol LDL es alto: TENGA CUIDADO";
    }
}

validarClave=function(clave){
    let tamanio=clave.length;
    if(tamanio>=8 && tamanio<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    let mayuscula=caracter.charCodeAt(0);
    if(mayuscula>=65 && mayuscula<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let minuscula=caracter.charCodeAt(0);
    if(minuscula>=97 && minuscula<=122){
        return true;
    }else if(minuscula>=160 && minuscula<=163){
        return true;
    }else if(minuscula==130){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let digito=caracter.charCodeAt(0);
    if(digito>=48 && digito<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let matematica=parseFloat(notaMatematica);
    let fisica=parseFloat(notaFisica);
    let geometria=parseFloat(notaGeometria);
    if(matematica>90 || fisica>90 || geometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let matematica=parseFloat(notaMatematica);
    let fisica=parseFloat(notaFisica);
    let geometria=parseFloat(notaGeometria);
    if(matematica>90 || fisica>90 && geometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let matematica=parseFloat(notaMatematica);
    let fisica=parseFloat(notaFisica);
    let geometria=parseFloat(notaGeometria);
    if(matematica>90 || fisica>90 || geometria>90 && fisica>matematica){
        return true;
    }else{
        return false;
    }
}