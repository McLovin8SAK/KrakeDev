cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargar = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let cuentaEncontrada = null; //1) declaro la variable asignandole null, como si por defecto fuera nueva
    let elementoCuenta; //2) declaro la variable donde sera almacenado la cuenta si es que la encuentra
    for (let i = 0; i < cuentas.length; i++) { //3) aplico un for para barrer todas las cuentas en el arreglo
        elementoCuenta = cuentas[i]; //4) almaceno el indice en la variable que declaré en el paso 2
        if (elementoCuenta.numeroCuenta == numeroCuenta) {
            cuentaEncontrada = elementoCuenta; //5) le doy la condición de que una de las cuentas del for con .numeroCuenta es comparable con el parametro de la función
            break; //6) si encuentra, entonces la cuentaEncontrada ya no es null, sino que le asigno el elementoCuenta
        }
    }
    return cuentaEncontrada; //8) fuera del for que me arroje la cuenta que sí hay.

}


ejecutarBusqueda = function () {
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert

    let cuentaTransaccion = recuperarTexto("txtCuentaTransaccion"); //1) recupero el valor de la caja de texto (numero de cuenta) y guardo en variable
    let cuentaBusqueda = buscarCuenta(cuentaTransaccion); //2) invoco a la función buscarCuenta, como parametro la variable 1 y guardo todo en otra variable
    if (cuentaBusqueda != null) { //3) la condicion si la cuenta es diferente a nada, o sea, si la cuenta coincide con alguna entonces asigna:
        mostrarTexto("lblNombre", "Nombre: " + cuentaBusqueda.nombre + " " + cuentaBusqueda.apellido);
        mostrarTexto("lblCedula", "Cedula: " + cuentaBusqueda.cedula);
        mostrarTexto("lblCuenta", "Cuenta: " + cuentaBusqueda.numeroCuenta);
        mostrarTexto("lblSaldo", "Saldo: " + cuentaBusqueda.saldo);

        habilitarComponente("btnDepositar"); //4) habilita los componentes
        habilitarComponente("btnRetirar");
    } else {
        alert("CUENTA INEXISTENTE");
    }
}
// IMPORTANTE: llamar a ejecutar busqueda en el boton BUSCAR




depositar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta); //1) invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    cuentaAfectada.saldo += monto; //2) Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

ejecutarDeposito = function () {
    let cuentaTransaccion = recuperarTexto("txtCuentaTransaccion"); //1) Toma el numero de cuenta ingresado en la caja de texto
    let montoTransaccion = recuperarInt("txtMontoTransaccion"); //2)Toma el monto ingresado en la caja de texto
    depositar(cuentaTransaccion, montoTransaccion); //3)invoca a depositar
    alert("TRANSACCION EXITOSA");
    mostrarTexto("lblSaldo", "Saldo: " + montoTransaccion);  //4) Muestra en pantalla el nuevo saldo de la cuenta
}


retirar = function (numeroCuenta, monto) {

    let cuentaAfectada = buscarCuenta(numeroCuenta); //1) invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    if (cuentaAfectada.saldo >= monto) { //2) la condicion es que si el saldo de cuentaAfectada es mayor o igual al monto que se ingrese entra a:
        cuentaAfectada.saldo -= monto; //3) Como es menor, entra a restar el monto. No olvides el -=
        return cuentaAfectada.saldo; //4) retorna el saldo actualizado.
    }else{
        return null;
    }
}

ejecutarRetiro = function () {
    let cuentaTransaccion = recuperarTexto("txtCuentaTransaccion"); //1) recupera el valor de la caja
    let montoTransaccion = recuperarInt("txtMontoTransaccion"); //2) recupera el valor de la otra caja
    let nuevoSaldo = retirar(cuentaTransaccion, montoTransaccion); //3) invoca a retirar y sus parametros en 1 y 2. Guarda en una nueva variable

    if(nuevoSaldo !== null){ //4) Condiciona que si nuevo saldo es diferente abs a null entra a:
        alert("TRANSACCION EXITOSA");
        mostrarTexto("lblSaldo", "Saldo: " + nuevoSaldo); //5) mostrar en pantalla.
    }else{
        alert("SALDO INSUFICIENTE");
    }
}




