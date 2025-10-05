let clientes = [{ cedula: "12345", nombre: "Juan", edad: 23 },
{ cedula: "09876", nombre: "Maria", edad: 29 },
{ cedula: "10293", nombre: "Jose", edad: 57 }];

crearCliente = function () { //esta es la que va a ser llamada desde el html
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    // ahora, con estos valores debo armar mi objeto
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    //ahora si llamo a agregarCliente pasandole el objeto completo
    agregarCliente(nuevoCliente);
}


agregarCliente = function (cliente) { // ahora si vamos a agregar cliente, solo va a meterlo en el arreglo// le paso como parametro un objeto cliente a agregar
    let resultado;
    resultado = buscarCliente(cliente.cedula); // a la funcion agregarCliente le va a llegar un objeto entero, pero al buscarCliente solo le va llegar la cedula, por eso el .cedula
    if (resultado == null) { // como se si encontro o no? por el retorno null en clienteEncontrado. Como no encontro, no existe y puedo agregarle
        clientes.push(cliente); //agrego al arreglo el nuevo cliente
        alert("Cliente agregado"); // esta fue una añadidura al final
        mostrarClientes(); //esta tambien fue una añadidura al final

    } else {
        alert("Ya existe el cliente con la cedula " + cliente.cedula);
    }
}


buscarCliente = function (cedula) { // Queremos agregar un cliente al arreglo, pero primero que las cedulas no se repitan, es decir, antes de agregar valido si existe o no
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) { // busco en el arreglo si es que hay un cliente con esa cedula, pero no el objeto, sino el atributo cedula y le comparo con cedula del parametro de la funcion
            clienteEncontrado = elementoCliente; //empieza como null, pero si en la validacion lo encuentra arroja al cliente que ya habia
            break; //para que ya no siga buscando si es que lo encuentra
        }
    }
    return clienteEncontrado; // va a seguir null si no encontro
} // va a retornar el objeto cliente en caso de que lo encuentre y si no lo encuentra retorna null

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes"); // sin esta variable no estaria recuperando nada. Esto se agrego al ultimo
    let contenidoTabla = "<table><tr>" + "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" + "<th>EDAD</th></tr>"; // hasta table estaba, luego se añadieron los encabezado a partir del tr
    let elementoCliente; //para recuperar cada elemento del arreglo en la iteracion
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i]; //en cada iteracion se va a ir añadiendo cada clientes 0 1 2
        contenidoTabla += "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td></tr>"
        // por cada cliente recuperado del arreglo se arma una fila "+="
        // en la misma fila agrego otra celda = le parto a los td y tr que cierran y abren
    }
    contenidoTabla += "</table>" // concatenar el table que cierra
    cmpTabla.innerHTML = contenidoTabla
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if (cliente == null) {
        alert("Cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

modificarCliente = function (cliente) { //va a buscar en el arreglo al cliente
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) { // como si le encontro, ahora voy a modificar
        clienteEncontrado.nombre = cliente.nombre; // al clienteEncontrado le cambio los datos (nombre) que es el parametro ingresado de la funcion
        clienteEncontrado.edad = cliente.edad;
    }
}

guardarCambios = function () { //este va a ser llamado desde el html y va a guardar los cambios establecidos en modificarCliente
    //toma los valores de las cajas de texto y con eso arma un cliente
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;

    modificarCliente(datosCliente); // pero como su funcion lo señala debe guardar como parametro un objeto cliente

    //luego, modificarCliente recibe el objeto // manda a hacer la busqueda y si es que encuentra, sobre el objeto que encontro realiza los cambios

    mostrarClientes(); // finalmente muestra en la tabla 
}
