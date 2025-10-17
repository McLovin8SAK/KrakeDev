cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
}

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
    for(let i=0;i<cuentas.length;i++){ //3) aplico un for para barrer todas las cuentas en el arreglo
        elementoCuenta=cuentas[i]; //4) almaceno el indice en la variable que declaré en el paso 2
        if(elementoCuenta.numeroCuenta==numeroCuenta){ //5) le doy la condición de que una de las cuentas del for con .numeroCuenta es comparable con el parametro de la función
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
    if(cuentaExistente==null){ //2) la condicion es que si cuentaExistente se compara con null, es porque es nueva y no hay otra igual
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

    let valorCedula=recuperarTexto("txtCedula") //1) recupero los valores y guardo en variables.
    let valorNombre=recuperarTexto("txtNombre")
    let valorApellido=recuperarTexto("txtApellido")
    let valorCuenta=recuperarTexto("txtNumeroCuenta")

    let cuenta = {} //2) creo el objeto

    cuenta.cedula=valorCedula; //3) agrego las variables(valores recuperados) y les asigno  en los atributos del nuevo objeto
    cuenta.nombre=valorNombre;
    cuenta.apellido=valorApellido;
    cuenta.numeroCuenta=valorCuenta;
    cuenta.saldo=0

    agregarCuenta(cuenta);
    mostrarCuentas();
}

//RECUERDA INVOCAR LA FUNCIÓN EN EL BOTÓN DEL HTML
