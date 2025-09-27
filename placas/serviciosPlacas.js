validarEstructura = function (placa) {
    let sinErrores = true;
    let errores = "";
    let longuitudPlaca = placa.length;
    if (longuitudPlaca < 7 || longuitudPlaca > 8) {
        errores = errores + "La placa debe tener 7 u 8 caracteres. ";
        sinErrores = false;
    }
    let primerCaracter = placa.charCodeAt(0);
    if (primerCaracter < 65 || primerCaracter > 90) {
        errores = errores + "El primer caracter debe ser una mayuscula. ";
        sinErrores = false;
    }
    let segundoCaracter = placa.charCodeAt(1);
    if (segundoCaracter < 65 || segundoCaracter > 90) {
        errores = errores + "El segundo caracter debe ser una mayuscula. ";
        sinErrores = false;
    }
    let tercerCaracter = placa.charCodeAt(2);
    if (tercerCaracter < 65 || tercerCaracter > 90) {
        errores = errores + "El tercer caracter debe ser una mayuscula. ";
        sinErrores = false;
    }
    let cuartoCaracter = placa.charCodeAt(3);
    if (cuartoCaracter != 45) {
        errores = errores + "El cuarto caracter debe ser un guion. ";
        sinErrores = false;
    }
    let quintoCaracter = placa.charCodeAt(4);
    if (quintoCaracter < 48 || quintoCaracter > 57) {
        errores = errores + "El quinto caracter debe ser un digito. ";
        sinErrores = false;
    }
    let sextoCaracter = placa.charCodeAt(5);
    if (sextoCaracter < 48 || sextoCaracter > 57) {
        errores = errores + "El sexto caracter debe ser un digito. ";
        sinErrores = false;
    }
    let septimoCaracter = placa.charCodeAt(6);
    if (septimoCaracter < 48 || septimoCaracter > 57) {
        errores = errores + "El septimo caracter debe ser un digito. ";
        sinErrores = false;
    }
    if (longuitudPlaca == 8) {
        let ultimoDigito = placa.length - 1;
        let octavoDigito = placa.charAt(ultimoDigito);
        if (isNaN(octavoDigito)) {
            errores = errores + "El octavo caracter debe ser un digito. ";
            sinErrores = false;
        }
    }
    if (sinErrores == true) {
        return null;
    } else {
        return errores;
    }
}

obtenerProvincia=function(placa){
    let primerCaracter = placa.charAt(0);
    if(primerCaracter=="A"){
        return "Azuay";
    }
    if(primerCaracter=="B"){
        return "Bolivar"
    }
    if(primerCaracter=="U"){
        return "Cañar";
    }
    if(primerCaracter=="C"){
        return "Carchi";
    }
    if(primerCaracter=="X"){
        return "Cotopaxi";
    }
    if(primerCaracter=="H"){
        return "Chimborazo";
    }
    if(primerCaracter=="O"){
        return "El Oro";
    }
    if(primerCaracter=="E"){
        return "Esmeraldas";
    }
    if(primerCaracter=="W"){
        return "Galapagos";
    }
    if(primerCaracter=="G"){
        return "Guayas";
    }
    if(primerCaracter=="I"){
        return "Imbabura";
    }
    if(primerCaracter=="L"){
        return "Loja";
    }
    if(primerCaracter=="R"){
        return "Los Rios";
    }
    if(primerCaracter=="M"){
        return "Manabi";
    }
    if(primerCaracter=="V"){
        return "Morona Santiago";
    }
    if(primerCaracter=="N"){
        return "Napo";
    }
    if(primerCaracter=="S"){
        return "Pastaza";
    }
    if(primerCaracter=="P"){
        return "Pichincha";
    }
    if(primerCaracter=="K"){
        return "Sucumbios";
    }
    if(primerCaracter=="Q"){
        return "Orellana";
    }
    if(primerCaracter=="T"){
        return "Tungurahua";
    }
    if(primerCaracter=="Z"){
        return "Zamora Chinchipe";
    }
    if(primerCaracter=="Y"){
        return "Santa Elena";
    }else{
        return null;
    }
}

obtenerTipoVehiculo=function(placa){
    let segundoCaracter = placa.charAt(1);
    if(segundoCaracter=="A" || segundoCaracter=="Z"){
        return "Es vehiculo comercial";
    }
    if(segundoCaracter=="E"){
        return "Es vehiculo gubernamental";
    }
    if(segundoCaracter=="X"){
        return "Es vehiculo de uso oficial";
    }
    if(segundoCaracter=="S"){
        return "Es vehiculo de gobierno provincial";
    }
    if(segundoCaracter=="M"){
        return "Es vehiculo municipal";
    }else{
        return null;
    }
}

obtenerDiaPicoYPlaca=function(placa){
    let ultimoDigito=placa.length -1;
    let ultimoNumero=placa.charAt(ultimoDigito);
    if(ultimoNumero==1 || ultimoNumero==2){
        return "Pico y placa: Lunes";
    }
    if(ultimoNumero==3 || ultimoNumero==4){
        return "Pico y placa: Martes";
    }
    if(ultimoNumero==5 || ultimoNumero==6){
        return "Pico y placa: Miercoles";
    }
    if(ultimoNumero==7 || ultimoNumero==8){
        return "Pico y placa: Jueves";
    }
    if(ultimoNumero==9 || ultimoNumero==0){
        return "Pico y placa: Viernes";
    }else{
        return null;
    }
}



