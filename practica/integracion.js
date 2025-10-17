cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]


mostrarOpcionCuentas = function () {

    ocultarComponente("divTransacciones");
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
}

mostrarOpcionMovimientos = function () {

    ocultarComponente("divCuentas");
    mostrarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
}

mostrarOpcionTransaciones = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
}

//// CUENTAS ////

mostrarCuentas = function () {
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
    let cmpTabla = document.getElementById("tablaCuentas"); //7) declaro variable y defino donde ubicar la tabla en el html
    let contenidoTabla = "<table><tr>" + "<th>NUMERO CUENTA</th>" + "<th>NOMBRE</th>" + "<th>SALDO</th></tr>"; //1) creo el encabezado de la página
    let elementoTabla; //2) declaro una variable para almacenar lo que barra el for
    for (let i = 0; i < cuentas.length; i++) { //3) genero el for barriendo el arreglo cuentas
        elementoTabla = cuentas[i]; //4) almaceno el indice de cuentas barridas en la variable declarada en el paso 2
        contenidoTabla += "<tr><td>" + elementoTabla.numeroCuenta + //5) completo la tabla sumando a la variable del paso 1 con += y añado a la variable del paso 2 con . y los elementos del objeto
            "</td>" + "<td>" + elementoTabla.nombre + " " + elementoTabla.apellido +
            "</td>" + "<td>" + elementoTabla.saldo + "</td></tr>";
    }
    contenidoTabla += "</table>" //6) cierro la variable 1
    cmpTabla.innerHTML = contenidoTabla //8) a la variable 1 le asigno la del paso 7 con .innerHTML para que se muestre en pantalla.
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
        if (elementoCuenta.numeroCuenta == numeroCuenta) { //5) le doy la condición de que una de las cuentas del for con .numeroCuenta es comparable con el parametro de la función
            cuentaEncontrada = elementoCuenta; //6) si encuentra, entonces la cuentaEncontrada ya no es null, sino que le asigno el elementoCuenta
            break; //7) para que deje de buscar
        }
    }
    return cuentaEncontrada //8) fuera del for que me arroje la cuenta que sí hay.
}


/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let cuentaExistente = buscarCuenta(cuenta.numeroCuenta); //1) invoco a buscarCuenta con parametro y su propiedad específica .numeroCuenta
    if (cuentaExistente == null) { //2) la condicion es que si cuentaExistente se compara con null, es porque es nueva y no hay otra igual
        cuentas.push(cuenta); //3) Al ser nueva, entonces entra en el if: señalo el arreglo, le pongo .push y el parámetro de la función para añadirle al arreglo.
        alert("Cuenta agregada"); //4) Un simple mensaje de confirmación
    } else {
        alert("Cuenta existente"); //5) caso contrario, como no es null, significa que sí hay una ya registrada.
    }
}


agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas

    let valorCedula = recuperarTexto("txtCedula") //1) recupero los valores y guardo en variables.
    let valorNombre = recuperarTexto("txtNombre")
    let valorApellido = recuperarTexto("txtApellido")
    let valorCuenta = recuperarTexto("txtNumeroCuenta")

    let cuenta = {} //2) creo el objeto

    cuenta.cedula = valorCedula; //3) agrego las variables(valores recuperados) y les asigno  en los atributos del nuevo objeto
    cuenta.nombre = valorNombre;
    cuenta.apellido = valorApellido;
    cuenta.numeroCuenta = valorCuenta;
    cuenta.saldo = 0

    agregarCuenta(cuenta);
    mostrarCuentas();
}




///// TRANSACCIONES



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

    //***** AÑADIDO EN INTEGRACION *****//// esta en la indicaciones finales
    let movimiento = {
        numeroCuenta: numeroCuenta,
        monto: monto,
        tipo: "C"
    }
    movimientos.push(movimiento);
}

ejecutarDeposito = function () {
    let cuentaTransaccion = recuperarTexto("txtCuentaTransaccion"); //1) Toma el numero de cuenta ingresado en la caja de texto
    let montoTransaccion = recuperarInt("txtMontoTransaccion"); //2)Toma el monto ingresado en la caja de texto
    depositar(cuentaTransaccion, montoTransaccion); //3)invoca a depositar
    let cuentaAfectada = buscarCuenta(cuentaTransaccion); //****** añadido en la integración porque "no estas actualizando lblSaldo. Hay que llamar a la funcion bsucarCuenta"
    alert("TRANSACCION EXITOSA");
    mostrarTexto("lblSaldo", "Saldo: " + cuentaAfectada.saldo);  //4) Muestra en pantalla el nuevo saldo de la cuenta ////**** el último componente se modifico, en su lugar decia  montotransaccion
}


retirar = function (numeroCuenta, monto) {

    let cuentaAfectada = buscarCuenta(numeroCuenta); //1) invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    if (cuentaAfectada.saldo >= monto) { //2) la condicion es que si el saldo de cuentaAfectada es mayor o igual al monto que se ingrese entra a:
        cuentaAfectada.saldo -= monto; //3) Como es menor, entra a restar el monto. No olvides el -=

        ////**** AÑADIDO EN INTEGRACION****/// Ver indicaciones al final
        let movimiento = {
            numeroCuenta: numeroCuenta,
            monto: monto,
            tipo: "D"
        }
        movimientos.push(movimiento);
        return cuentaAfectada.saldo; //4) retorna el saldo actualizado.
    } else {
        return null;
    }
}

ejecutarRetiro = function () {
    let cuentaTransaccion = recuperarTexto("txtCuentaTransaccion"); //1) recupera el valor de la caja
    let montoTransaccion = recuperarInt("txtMontoTransaccion"); //2) recupera el valor de la otra caja
    let nuevoSaldo = retirar(cuentaTransaccion, montoTransaccion); //3) invoca a retirar y sus parametros en 1 y 2. Guarda en una nueva variable

    if (nuevoSaldo !== null) { //4) Condiciona que si nuevo saldo es diferente abs a null entra a:
        alert("TRANSACCION EXITOSA");
        mostrarTexto("lblSaldo", "Saldo: " + nuevoSaldo); //5) mostrar en pantalla.
    } else {
        alert("SALDO INSUFICIENTE");
    }
}






///// MOVIMIENTOS /////





filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = []; //1) ya estaba
    let movimientoEncontrado; //2) la variable donde voy a guardar el indice iterado
    for (let i = 0; i < movimientos.length; i++) { //3) me barro el arreglo movimientos
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
    let montoModificado = 0; //4) variable declarada para guardar el resultado de la operación dentro de la condición
    for (let i = 0; i < misMovimientos.length; i++) { //3) barrerse el arreglo no de movimientos, sino de misMovimientos como parametro de la funcion.
        elementoTabla = misMovimientos[i];
        generarTabla += "<tr><td>" + elementoTabla.numeroCuenta + "</td>";
        if (elementoTabla.tipo == "D") { //5) las condiciones de más arriba.
            montoModificado = elementoTabla.monto * -1; //***Aquí es confuso, pero solo estamultiplicando una propiedad del objeto y asignandole a la variable del paso 4
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




/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


