// Lista base de productos
const productos = [
    {
        nombre: "Camisa",
        descripcion: "Camisa blanca de algodón",
        categoria: "Ropa",
        precio: 25.99,
        stock: 50,

    },
    {
        nombre: "Pantalón",
        descripcion: "Pantalón azul jeans",
        categoria: "Ropa",
        precio: 40.0,
        stock: 30,

    },
    {
        nombre: "Zapatos",
        descripcion: "Zapatos deportivos",
        categoria: "Calzado",
        precio: 60.5,
        stock: 20,

    },
];

// Lista base de categorías
const categorias = [
    { nombre: "Ropa", descripcion: "Prendas de vestir" },
    { nombre: "Calzado", descripcion: "Zapatos, sandalias y más" },
];

let carrito = [ ///antes era cost
    { nombre: "Camisa", cantidad: 2, precio: 25.99 },
    { nombre: "Zapatos", cantidad: 1, precio: 60.5 },
];

const ventas = [
    {
        cliente: {
            nombre: "Juan Pérez",
            email: "juan.perez@example.com",
            telefono: "0991234567",
            direccion: "Av. Siempre Viva 123",
        },
        total: 112.48,
    },
    {
        cliente: {
            nombre: "María López",
            email: "maria.lopez@example.com",
            telefono: "0987654321",
            direccion: "Calle Falsa 456",
        },
        total: 40.0,
    },
];
// Función: agregar o actualizar producto
function agregarProducto() {
    /*
        - Obtener datos del producto desde inputs
        - Validar que todos los campos sean correctos
        - Si el producto existe (por nombre), actualizar datos
        - Si no existe, agregar producto a la lista
        - Limpiar campos y actualizar la tabla y estadísticas
      */
    let valorNombre = recuperarTexto("txtNombre");
    let valorDescripcion = recuperarTexto("txtDescripcion");
    let valorCategoria = recuperarTexto("txtCategoria");
    let valorPrecio = recuperarFloat("txtPrecio");
    let valorStock = recuperarInt("txtStock");

    let sinErrores = true;

    //VALIDACIONES PARA NOMBRE
    let erroresNombre = "";
    if (valorNombre == "" || valorNombre.trim() == "") {
        sinErrores = false;
        erroresNombre += "El nombre no puede quedar vacío. ";
    }

    for (let i = 0; i < valorNombre.length; i++) {
        let letrasNombre = valorNombre.charCodeAt(i);
        if ((letrasNombre < 65 || letrasNombre > 90) && (letrasNombre < 97 || letrasNombre > 122)) {
            sinErrores = false;
            erroresNombre += "El nombre debe contener solo letras. "
            break;
        }
    }

    if (!esMayuscula(valorNombre[0])) {
        sinErrores = false;
        erroresNombre += "La primera letra debe ser mayuscula. "
    }

    for (let i = 1; i < valorNombre.length; i++) {
        let minusculas = valorNombre.charCodeAt(i);
        if (minusculas < 97 || minusculas > 122) {
            sinErrores = false;
            erroresNombre += "Solo la primera letra debe ser mayuscula. "
            break;
        }
    }

    if (erroresNombre != "") {
        mostrarTexto("lblError1", erroresNombre);
    } else {
        mostrarTexto("lblError1", "");
    }


    // VALIDACIONES PARA DESCRIPCION

    let erroresDescripcion = "";
    if (valorDescripcion == "") {
        sinErrores = false;
        erroresDescripcion += "El campo es obligatorio. "
    }

    for (let i = 0; i < valorDescripcion.length; i++) {
        let caracter = valorDescripcion.charCodeAt(i);
        if ((caracter >= 33 && caracter <= 47) || (caracter >= 58 && caracter <= 64)
            || (caracter >= 91 && caracter <= 96) || (caracter >= 123 && caracter <= 126)) {
            sinErrores = false;
            erroresDescripcion += "No puede contener caracteres especiales. "
            break;
        }
    }

    if (erroresDescripcion != "") {
        mostrarTexto("lblError2", erroresDescripcion);
    } else {
        mostrarTexto("lblError2", "");
    }

    // VALIDACIONES PARA CATEGORIA

    let erroresCategoria = "";
    if (valorCategoria == "") {
        sinErrores = false;
        erroresCategoria += "El campo es obligatorio. ";
    }

    for (let i = 0; i < valorCategoria.length; i++) {
        let letrasYEspacios = valorCategoria.charCodeAt(i);
        if ((letrasYEspacios != 32) && (letrasYEspacios < 65 || letrasYEspacios > 90) && (letrasYEspacios < 97 || letrasYEspacios > 122)) {
            sinErrores = false;
            erroresCategoria += "Solo se permiten letras y espacios. ";
            break;
        }
    }

    if (!esMayuscula(valorCategoria[0])) {
        sinErrores = false;
        erroresCategoria += "La primera letra debe ser mayuscula. "
    }

    for (let i = 1; i < valorCategoria.length; i++) {
        let minusculas = valorCategoria.charCodeAt(i);
        if (minusculas < 97 || minusculas > 122) {
            sinErrores = false;
            erroresCategoria += "Solo la primera letra debe ser mayuscula. "
            break;
        }
    }

    if (erroresCategoria != "") {
        mostrarTexto("lblError3", erroresCategoria);
    } else {
        mostrarTexto("lblError3", "");
    }

    // VALIDACIONES PARA PRECIO

    if (isNaN(valorPrecio) || valorPrecio < 0) {
        sinErrores = false;
        mostrarTexto("lblError4", "Debe ser un numero igual o mayor a 0.");
    } else {
        mostrarTexto("lblError4", "");
    }

    // VALIDACIONES PARA STOCK

    if (isNaN(valorStock) || valorStock < 0) {
        sinErrores = false;
        mostrarTexto("lblError5", "Ingrese un stock valido (entero, 0 o mas).");
    } else {
        mostrarTexto("lblError5", "");
    }

    // SI PASA LAS VALIDACIONES, CREA OBJETO Y AGREGA AL ARREGLO

    if (sinErrores == true) { //
        let productoExistente = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre == valorNombre) {
                productoExistente = productos[i];
                break;
            }
        }
        if (productoExistente != null) { // esta seccion actualiza?
            productoExistente.descripcion = valorDescripcion;
            productoExistente.categoria = valorCategoria;
            productoExistente.precio = valorPrecio;
            productoExistente.stock = valorStock;
        } else {
            let nuevoProducto = { // esta crea el nuevo producto
                nombre: valorNombre,
                descripcion: valorDescripcion,
                categoria: valorCategoria,
                precio: valorPrecio,
                stock: valorStock
            }
            productos.push(nuevoProducto);
        }
        limpiarProducto();
        limpiarErrores();
        mostrarProductos();
        actualizarEstadisticasProductos();
        mostrarProductosDisponibles();
    }

}

function limpiarProducto() {
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtDescripcion", "");
    mostrarTextoEnCaja("txtCategoria", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtStock", "");
}

function limpiarErrores() {
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
    mostrarTexto("lblError4", "");
    mostrarTexto("lblError5", "");
}

// Función: mostrar productos en la tabla
function mostrarProductos() {
    /*
        - Limpiar contenido actual de la tabla
        - Recorrer lista de productos
        - Crear filas dinámicas con los datos y botón para eliminar
      */
    let cmpTabla = document.getElementById("tablaProductos");
    let contenidoTabla = "<table><tr>" + "<th>NOMBRE</th>" + "<th>DESCRIPCION</th>" + "<th>CATEGORIA</th>" + "<th>PRECIO</th>" + "<th>STOCK</th>" + "<th>PRECIO CON IVA</th></tr>";
    let elementoProducto;
    for (let i = 0; i < productos.length; i++) {
        elementoProducto = productos[i];
        let precioConIva = elementoProducto.precio + (elementoProducto.precio * 0.12);
        contenidoTabla += "<tr><td>" + elementoProducto.nombre + "</td>" + "<td>" +
            elementoProducto.descripcion + "</td>" + "<td>" + elementoProducto.categoria +
            "</td>" + "<td>" + elementoProducto.precio + "</td>" + "<td>" +
            elementoProducto.stock + "</td>" + "<td>" + precioConIva.toFixed(2) + "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


// Función: eliminar producto por índice
function eliminarProducto(index) {
    /*
    // Función para eliminar un producto en la posición dada del array
    function eliminarProducto(index) {
      // El método splice modifica el array original eliminando elementos
      // El primer parámetro 'index' indica la posición donde empezar a eliminar
      // El segundo parámetro '1' indica que se elimina un solo elemento
      productos.splice(index, 1);
    }
    */

    /*
        - Confirmar acción con el usuario
        - Remover producto de la lista productos
        - Actualizar tabla y estadísticas
      */

    let valorEliminado = recuperarTexto("txtEliminarProducto");
    let sinErrores = true;
    let errores = "";

    // VALIDACION PARA NOMBRE
    if (valorEliminado == "" || valorEliminado.trim() == "") {
        sinErrores = false;
        errores = "El nombre no puede quedar vacio. "
    }

    // SI NO HAY ERRORES EN LA VALIDACION
    if (sinErrores == true) {
        let productoExistente = null; // variable para almacenar el producto que se va a eliminar
        for (let i = 0; i < productos.length; i++) { //recorre la lista para ver si coincide con alguno
            if (productos[i].nombre === valorEliminado) { //verifica si el nombre del producto cincide con el ingresado
                productoExistente = productos[i]; // si coincide, asigna el producto a la variable productoExistente y sale del bucle
                break;
            }
        }
        if (productoExistente != null) { //verifica si se encontró un producto que coincide con el nombre asignado
            if (confirm("Estas seguro de eliminar el producto " + valorEliminado + "?")) { // pide confirmación al usuario para eliminar el producto
                productos.splice(productos.indexOf(productoExistente), 1); //elimina el producto de la lista usando el splice
                mostrarProductos(); // invoca la tabla actualizada
                actualizarEstadisticasProductos();// aquí va la funcion de actualizar estadisticas
                mostrarProductosDisponibles();
                mostrarTexto("lblErrorEliminar", ""); // limpia el label y la caja
                mostrarTextoEnCaja("txtEliminarProducto", "");
            }
        } else {
            mostrarTexto("lblErrorEliminar", "No se encontró el producto con ese nombre"); // Si no encontró un producto que coincide con el nombre ingresado, muestra un mensaje de error
        }
    } else { // si hay errores en la validacion, muestra el mensaje de error 
        mostrarTexto("lblErrorEliminar", errores);
    }
}

// Función: actualizar estadísticas de productos
function actualizarEstadisticasProductos() {
    /*
        - Calcular y mostrar total productos, stock total y valor inventario
      */

    let totalProductos = productos.length; // calcula el total de productos en la lista
    let stockTotal = 0; //variable para almacenar el stock total
    let valorInventario = 0; // variable para almacenar el valor total

    for (let i = 0; i < productos.length; i++) { //recorre la lista de productos
        stockTotal += productos[i].stock; //suma el stock del producto actual al stock total
        valorInventario += productos[i].precio * productos[i].stock; //suma el valor del producto actual (precio * stock) al valor total del inventario
    }
    mostrarTexto("totalProductos", totalProductos); //muesta en pantalla los calculos
    mostrarTexto("stockTotal", stockTotal);
    mostrarTexto("valorInventario", valorInventario.toFixed(2));
}

// Función: limpiar campos de producto
function limpiarCamposProducto() {
    /*
        - Limpiar inputs de producto para nueva entrada
      */
}

// Función: agregar categoría
function agregarCategoria() {
    /*
        - Obtener datos desde inputs
        - Validar campos obligatorios y evitar duplicados
        - Agregar categoría a la lista
        - Limpiar campos y actualizar lista de categorías
      */

    let valorNombre = recuperarTexto("nombreCategoria"); //obtener datos desde los inputs
    let valorDescripcion = recuperarTexto("descripcionCategoria");

    let sinErrores = true; //para validar campos obligatorios
    let errores = "";

    //VALIDACION PARA NOMBRE CATEGORIA
    if (valorNombre == "" || valorNombre.trim() == "") {
        sinErrores = false;
        errores += "El nombre de la categoria es obligatorio. ";
    }

    //VALIDACION PARA EVITAR DUPLICADOS
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].nombre == valorNombre) { // categorias[i].nombre.toLowerCase() == valorNombre.toLowerCase()
            sinErrores = false;
            errores += "La categoria ya existe. "
            break;
        }
    }

    if (sinErrores == false) { //mostrar errores si los hay
        mostrarTexto("ErrorNombreCategoria", errores);

    } else { //caso contrario de que no haya errores, entonces le agrega
        let nuevaCategoria = { // crea al objeto
            nombre: valorNombre,
            descripcion: valorDescripcion
        }
        categorias.push(nuevaCategoria);

        //limpia los campos
        mostrarTextoEnCaja("nombreCategoria", "");
        mostrarTextoEnCaja("descripcionCategoria", "");
        mostrarTexto("errorNombreCategoria", "");

        //Actualiza lista de categorias
        mostrarCategorias();
        mostrarProductosDisponibles();
    }
}

// Función: mostrar categorías
function mostrarCategorias() {
    /*
        - Limpiar lista actual
        - Recorrer categorías y mostrar en lista HTML
        - Agregar botón para eliminar categoría
      */

    //limpiar lista actual
    let contenidoLista = "";
    for (let i = 0; i < categorias.length; i++) {
        contenidoLista += "<li>" + categorias[i].nombre + "</li>";
    }
    document.getElementById("listaCategorias").innerHTML = contenidoLista;
}

// Función: eliminar categoría
function eliminarCategoria(index) {
    /*
        - Confirmar con el usuario
        - Eliminar categoría de la lista
        - Actualizar lista en pantalla
      */

    let valorCatEliminado = recuperarTexto("nombreCategoriaEliminar");
    let sinErrores = true;
    let errores = "";

    //VALIDACION PARA CAJA DE TEXTO
    if (valorCatEliminado == "" || valorCatEliminado.trim() == "") {
        sinErrores = false;
        errores = "*CAMPO OBLIGATORIO. "
    }

    //Si no hay errores en la validacion
    if (sinErrores == true) {
        let categoriaExistente = null; // variable para almacenar el producto que se va a eliminar
        for (let i = 0; i < categorias.length; i++) { //recorre la lista para ver si coincide con alguno
            if (categorias[i].nombre === valorCatEliminado) { //varifica si el nombre de la categoria coincide con el ingresado
                categoriaExistente = categorias[i]; // si coincide, le asigna la categoria a la variable categoriaExistente y sale del bucle
                break;
            }
        }
        if (categoriaExistente != null) { // verifica si se encontró una categoria que coincide con el nombre asignado
            if (confirm("Estas seguro de eliminar la categoria " + valorCatEliminado + "?")) { //pide al usuario la confirmacion
                categorias.splice(categorias.indexOf(categoriaExistente), 1); //elimina la categoria de la lista usando el splice

                mostrarCategorias(); //invoca la lista actualizada
                mostrarTexto("errorNombreCategoriaEliminar", ""); //limpia error y caja
                mostrarTextoEnCaja("nombreCategoriaEliminar", "");
                mostrarProductosDisponibles();
            }
        } else {
            mostrarTexto("errorNombreCategoriaEliminar", "No se encontró la categoria con ese nombre"); //si no se encontró la categoria que coincide con el nombre ingresado, muestra un mensaje error
        }
    } else { //si hay errores en la validacion, muestra el mensaje de error
        mostrarTexto("errorNombreCategoriaEliminar", errores);
    }

}

// Función: mostrar productos disponibles para añadir al carrito
function mostrarProductosDisponibles() {
    /*
        - Mostrar lista de productos con botón para añadir al carrito
      */

    let contenido = ""; //variable para almacenar el contenido html que se mostrara en la pagina
    for (let i = 0; i < productos.length; i++) { //recorre el arreglo de productos
        contenido += "<p>" + productos[i].nombre + " - Precio: $" + productos[i].precio + //se agrega el contenido html para cada producto, incluyendo su nombre, precio y stock, y un botón para agregar al carrito
            " - Stock: " + productos[i].stock + " <button onclick='agregarAlCarrito(\"" +
            productos[i].nombre + "\")'>Agregar al carrito</button></p>";
    }
    document.getElementById("productosDisponibles").innerHTML = contenido;// fuera del for, se muestra el contenido htmlen el id

}


// Función: añadir producto al carrito
function agregarAlCarrito(nombreProducto) {
    /*
        - Validar cantidad y stock disponible
        - Añadir producto o aumentar cantidad en carrito
        - Actualizar resumen y total del carrito
      */

    let cantidad = parseInt(prompt("Ingrese la cantidad que desea agregar:")); // Se solicita la cantidad que se desea agregar al carrito mediante un prompt

    let productoExistente = null; // Variable para almacenar el producto que se va a agregar

    for (let i = 0; i < productos.length; i++) {// Ciclo que busca el producto en el arreglo de productos
        if (productos[i].nombre == nombreProducto) { // Se verifica si el nombre del producto coincide con el nombre del producto que se va a agregar
            productoExistente = productos[i]; // Si se encuentra el producto, se asigna a la variable productoExistente
            break;
        }
    }

    if (productoExistente != null) { // Se verifica si se encontró el producto
        if (cantidad > 0 && cantidad <= productoExistente.stock) { // Se verifica si la cantidad es válida y si hay suficiente stock
            let productoEnCarrito = null; // Variable para almacenar el producto en el carrito

            for (let i = 0; i < carrito.length; i++) { // Ciclo que busca el producto en el carrito
                if (carrito[i].nombre == nombreProducto) { // Se verifica si el nombre del producto coincide con el nombre del producto que se va a agregar
                    productoEnCarrito = carrito[i]; // Si se encuentra el producto, se asigna a la variable productoEnCarrito
                    break;
                }
            }

            if (productoEnCarrito != null) { // Se verifica si el producto ya está en el carrito
                productoEnCarrito.cantidad += cantidad; // Si el producto ya está en el carrito, se suma la cantidad
            } else { // Si el producto no está en el carrito, se crea un nuevo objeto y se agrega al carrito
                let nuevoProducto = {
                    nombre: nombreProducto,
                    cantidad: cantidad,
                    precio: productoExistente.precio
                };
                carrito.push(nuevoProducto);
            }
            productoExistente.stock -= cantidad; // Se resta la cantidad del stock del producto
            mostrarProductosDisponibles(); // Se actualizan las vistas de productos y carrito
            mostrarCarrito();
        } else { // Si la cantidad no es válida o no hay suficiente stock, se muestra un mensaje de error
            alert("Cantidad inválida o no hay suficiente stock.");
        }
    } else { // Si no se encuentra el producto, se muestra un mensaje de error
        alert("Producto no encontrado.");
    }
}

// Función: mostrar resumen del carrito
function mostrarCarrito() {
    /*
        - Mostrar tabla con productos en carrito, cantidades y subtotal
        - Mostrar total general
      */

    let contenido = ""; // Variable para almacenar el contenido HTML que se mostrará en la página

    // Se agrega el título de la tabla
    contenido += "<h2>Carrito de Compras</h2>";
    contenido += "<table border='1'>";
    contenido += "<tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr>";

    let totalGeneral = 0; // Variable para almacenar el total general

    for (let i = 0; i < carrito.length; i++) { // recorre el arreglo de productos en el carrito
        let subtotal = carrito[i].cantidad * carrito[i].precio; // Se calcula el subtotal para cada producto

        // Se agrega una fila a la tabla para cada producto
        contenido += "<tr>";
        contenido += "<td>" + carrito[i].nombre + "</td>";
        contenido += "<td><input type='text' id='cantidad-" + i + "' value='" + carrito[i].cantidad + "'></td>";
        contenido += "<td>$" + carrito[i].precio + "</td>";
        contenido += "<td>$" + subtotal + "</td>";
        contenido += "<td><button onclick='editarCantidadCarrito(" + i + ")'>Editar</button><button onclick='eliminarDelCarrito(" + i + ")'>Eliminar</button></td>";
        contenido += "</tr>";

        totalGeneral += subtotal; // Se suma el subtotal al total general
    }

    // Se agrega la fila con el total general
    contenido += "<tr><td colspan='3'>Total General:</td><td>$" + totalGeneral + "</td></tr>";
    contenido += "</table>";

    document.getElementById("tablaCarrito").innerHTML = contenido; // Se muestra el contenido HTML en el elemento con el id "carrito"
    document.getElementById("totalCarrito").innerHTML = totalGeneral.toFixed(2);
}

// Función: editar cantidad de producto en carrito
function editarCantidadCarrito(index) {
    let nuevaCantidad = parseInt(document.getElementById("cantidad-" + index).value);
    let productoEnCarrito = carrito[index];
    let productoExistente = null;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == productoEnCarrito.nombre) {
            productoExistente = productos[i];
            break;
        }
    }
    if (productoExistente != null) {
        if (nuevaCantidad > 0 && nuevaCantidad <= productoExistente.stock + productoEnCarrito.cantidad) {
            productoExistente.stock += productoEnCarrito.cantidad - nuevaCantidad;
            carrito[index].cantidad = nuevaCantidad;
            mostrarProductosDisponibles();
            mostrarCarrito();
        } else {
            alert("Cantidad inválida o no hay suficiente stock.");
        }
    } else {
        alert("Producto no encontrado.");
    }
}

// Función: eliminar producto del carrito
function eliminarDelCarrito(index) {
    /*
        - Eliminar producto del carrito
        - Actualizar tabla y total
      */

    let productoEnCarrito = carrito[index]; // Se busca el producto en el carrito
    let productoExistente = null; // Se busca el producto en la lista de productos
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == productoEnCarrito.nombre) {
            productoExistente = productos[i];
            break;
        }
    }

    productoExistente.stock += productoEnCarrito.cantidad; // Se actualiza el stock del producto
    carrito.splice(index, 1); // Se elimina el producto del carrito

    // Se actualizan las vistas de productos y carrito
    mostrarProductosDisponibles();
    mostrarCarrito();
}
//////////////////////////////////////////////////////////////////

function confirmarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacio");
    } else {
        mostrarSeccion("seccion4");
        mostrarDatosCliente();
    }
}

function mostrarDatosCliente() {
    let contenido = "";
    contenido += "<h2>Datos del Cliente</h2>";
    contenido += "<p>Productos en el carrito:</p>";
    contenido += "<table border='1'>";
    contenido += "<tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr>";
    let totalGeneral = 0;
    for (let i = 0; i < carrito.length; i++) {
        let subtotal = carrito[i].cantidad * carrito[i].precio;
        contenido += "<tr>";
        contenido += "<td>" + carrito[i].nombre + "</td>";
        contenido += "<td>" + carrito[i].cantidad + "</td>";
        contenido += "<td>$" + carrito[i].precio + "</td>";
        contenido += "<td>$" + subtotal + "</td>";
        contenido += "</tr>";
        totalGeneral += subtotal;
    }
    contenido += "<tr><td colspan='3'>Total General:</td><td>$" + totalGeneral + "</td></tr>";
    contenido += "</table>";
    document.getElementById("datosClienteCarrito").innerHTML = contenido;
}



////////////////////////////////////////////////////////////////////////

// Función: guardar datos cliente
function guardarDatosCliente() {
    /*
        - Obtener y validar campos del cliente (nombre, email, teléfono, dirección)
        - Guardar datos para la compra
      */

    // Se obtienen los datos del cliente
    let nombreCliente = recuperarTexto("nombreCliente");
    let emailCliente = recuperarTexto("emailCliente");
    let telefonoCliente = recuperarTexto("telefonoCliente");
    let direccionCliente = recuperarTexto("direccionCliente");

    // Se validan los campos
    let sinErrores = true;
    let errores = "";
    if (nombreCliente == "" || nombreCliente.trim() == "") {
        sinErrores = false;
        errores += "El nombre es obligatorio. ";
    }
    if (emailCliente == "" || emailCliente.trim() == "") {
        sinErrores = false;
        errores += "El email es obligatorio. ";
    }
    if (telefonoCliente == "" || telefonoCliente.trim() == "") {
        sinErrores = false;
        errores += "El teléfono es obligatorio. ";
    }
    if (direccionCliente == "" || direccionCliente.trim() == "") {
        sinErrores = false;
        errores += "La dirección es obligatoria. ";
    }

    // Si no hay errores, se guardan los datos
    if (sinErrores) {
        // Se crea un objeto con los datos del cliente
        let cliente = {
            nombre: nombreCliente,
            email: emailCliente,
            telefono: telefonoCliente,
            direccion: direccionCliente
        };

        // Se puede guardar el cliente en una variable global o en localStorage
        // Por ahora, solo se muestra un mensaje de éxito
        alert("Datos guardados con éxito.");
        mostrarSeccion("seccion5");
        finalizarCompra();
    } else {
        // Si hay errores, se muestra un mensaje de error
        alert(errores);
    }

}

// Función: finalizar compra
function finalizarCompra() {
    /*
        - Validar carrito y datos cliente completos
        - Crear registro de venta con productos, cliente, total y fecha
        - Actualizar stock de productos vendidos
        - Vaciar carrito
        - Actualizar tablas y estadísticas
        - Mostrar mensaje éxito y limpiar formulario cliente
      */

    // Se valida que el carrito no esté vacío
    if (carrito.length > 0) {
        // Se crea un objeto con los datos de la venta
        let venta = {
            cliente: {
                nombre: recuperarTexto("nombreCliente"),
                email: recuperarTexto("emailCliente"),
                telefono: recuperarTexto("telefonoCliente"),
                direccion: recuperarTexto("direccionCliente")
            },
            productos: carrito,
            total: calcularTotalCarrito(),
            fecha: new Date()
        };

        // Se agrega la venta al arreglo de ventas
        ventas.push(venta);

        // Se actualiza el stock de los productos
        for (let i = 0; i < carrito.length; i++) {
            let productoEnCarrito = carrito[i];
            let productoExistente = null;
            for (let j = 0; j < productos.length; j++) {
                if (productos[j].nombre == productoEnCarrito.nombre) {
                    productoExistente = productos[j];
                    break;
                }
            }
            productoExistente.stock -= productoEnCarrito.cantidad;
        }

        // Se vacía el carrito
        carrito = [];

        // Se actualizan las vistas
        mostrarCarrito();
        mostrarProductosDisponibles();
        // Se muestra un mensaje de éxito
        alert("Compra finalizada con éxito.");

        mostrarVentas();
    }
}

// Función auxiliar para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0; //se inicia la variable total en 0 
    for (let i = 0; i < carrito.length; i++) { //recorre el arreglo de productos en el carrito
        total += carrito[i].precio * carrito[i].cantidad; // se suma el precio del producto multiplicado por la cantidad al total
    }
    return total; //retorna el total calculado

}

// Función: mostrar resumen de ventas
// Función: mostrar resumen de ventas
function mostrarVentas() {
    /* - Mostrar tabla con ventas registradas - Calcular y mostrar totales globales y producto más vendido */
    let contenido = ""; //se inicia la variable contenido con una cadena vacia
    contenido += "<table border='1'>"; // se agrega el titulo de la tabla
    contenido += "<tr><th>Cliente</th><th>Productos</th><th>Total</th></tr>";
    let totalVentas = 0; //cosa final
    for (let i = 0; i < ventas.length; i++) { // se recorre el arreglo de ventas
        contenido += "<tr>"; // se agrega una fila a la tabla para cada venta
        contenido += "<td>" + ventas[i].cliente.nombre + "</td>";
        contenido += "<td>";
        if (ventas[i].productos) {
            for (let j = 0; j < ventas[i].productos.length; j++) {
                contenido += ventas[i].productos[j].nombre + " x " + ventas[i].productos[j].cantidad + "<br>";
            }
        }
        contenido += "</td>";
        contenido += "<td>$" + ventas[i].total + "</td>";
        contenido += "</tr>";
        totalVentas += ventas[i].total; //sumar el total de la venta actual al totalVentas
    }
    contenido += "</table>"; //cierro tabla
    document.getElementById("tablaVentas").innerHTML = contenido; //muestro el contenido en la pagina
    document.getElementById("totalVentas").innerText = totalVentas.toFixed(2);
    document.getElementById("productoMasVendido").innerText = calcularProductoMasVendido();
}

// Función: calcular producto más vendido
function calcularProductoMasVendido() {
    let productosVendidos = {}; //se crea un objeto para almacenar la cantidad de producto vendido
    for (let i = 0; i < ventas.length; i++) { //se recorre el arreglo ventas
        let venta = ventas[i]; //se almacena el arreglo de ventas
        if (venta.productos) { //verifica si venta.productos existe
            for (let x = 0; x < venta.productos.length; x++) { //se recorre el arreglo de productos en la venta
                let producto = venta.productos[x]; //se obtiene el producto
                if (productosVendidos[producto.nombre]) { //se verifica si el producto ya esta en el objeto
                    productosVendidos[producto.nombre] += producto.cantidad; //si ya esta, se suma la cantidad vendida
                } else { // si no esta, se agrega al objeto con la cantidad vendida
                    productosVendidos[producto.nombre] = producto.cantidad;
                }
            }
        }
    }
    let productoMasVendido = null; //se inicializa la variable con null
    let cantidadMaxima = 0; // se inicializa en 0
    for (let producto in productosVendidos) { //recorre el objeto de productos vendidos
        if (productosVendidos[producto] > cantidadMaxima) { //se verifica si la cantidad vendida es mayor que la cantidad maxima
            productoMasVendido = producto; //si es mayor, se actualiza el producto más vendido
            cantidadMaxima = productosVendidos[producto];
        }
    }
    if(productoMasVendido===null){
        return "No hay ventas registradas";
    }
    return productoMasVendido; //retorna el producto más vendido
}

