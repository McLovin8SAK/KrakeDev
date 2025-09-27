esMayuscula=function(caracter){
    let letraMayuscula=caracter.charCodeAt(0);
    if(letraMayuscula>=65 && letraMayuscula<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
let esUnNumero=caracter.charCodeAt(0);
if(esUnNumero>=48 && esUnNumero<=57){
    return true;
}else{
    return false;
}
}

esGuion=function(caracter){
    let esUnGuion=cadena.charCodeAt(0);
    if(esUnGuion==45){
        return true;
    }else{
        return false;
    }
}

