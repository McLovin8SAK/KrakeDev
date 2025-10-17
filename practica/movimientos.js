movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

cargar = function () {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");

}


filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = []; //1) ya estaba
    let movimientoEncontrado; //2) la variable donde voy a guardar el indice iterado
    for (let i = 0; i < movimientos.lenght; i++) { //3) me barro el arreglo movimientos
        movimientoEncontrado = movimientos[i]; //4) el indice lo guardo en la variable 2
        if (movimientoEncontrado.numeroCuenta == numeroCuenta) { //5) En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
            movimientosCuenta.push(movimientoEncontrado); //6) En caso de serlo, agrega la cuenta al arreglo movimientosCuenta        
        }
    }
    mostrarMovimientos(movimientosCuenta); //7) Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
}


/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos = function (misMovimientos) {
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)

    let cmpTabla = document.getElementById("tablaMovimientos")
    let generarTabla = "<table><tr>" + "<th>NUMERO CUENTA</th>" + "<th>MONTO</th>" + "<th>TIPO</th></tr>"; //1) genera la tabla en pantalla con el parametro mis movimientos
    let elementoTabla; //2) variable declarada donde se almacenará el indice del arreglo
    let MontoModificado = 0; //4) variable declarada para guardar el resultado de la operación dentro de la condición
    for (let i = 0; i < misMovimientos.lenght; i++) { //3) barrerse el arreglo no de movimientos, sino de misMovimientos como parametro de la funcion.
        elementoTabla = misMovimientos[i];
        generarTabla += "<tr><td>" + elementoTabla.numeroCuenta + "</td>";
        if (elementoTabla.tipo == "D") { //5) las condiciones de más arriba.
            MontoModificado = elementoTabla.monto * -1; //***Aquí es confuso, pero solo estamultiplicando una propiedad del objeto y asignandole a la variable del paso 4
            generarTabla += "<td>" + montoModificado + "</td>" + "<td>" + elementoTabla.tipo + "</td></tr>";
        } else if (elementoTabla.tipo == "C") {
            generarTabla += "<td>" + elementoTabla.monto + "</td>" + "<td>" + elementoTabla.tipo + "</td></tr>";
        }

    }
    generarTabla += "</table>"
    cmpTabla.innerHTML = generarTabla
}


//Aqui se crea la que no está en el ejercicio

verMovimientos = function () {
    let numeroCuenta = recuperarTexto("numeroCuenta");
    filtrarMovimientos(numeroCuenta);
}


