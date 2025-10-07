let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1740418522", nombre: "Alan", apellido: "Brito", sueldo: 750.0 }
]

let esNuevo = false;

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();

    deshabilitarCajas();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let empleadosTabla = "<table><tr>" + "<th>CEDULA</th>" + "<th>NOMBRE</th>" + "<th>APELLIDO</th>" + "<th>SUELDO</th></tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        empleadosTabla += "<tr><td>" + elementoEmpleado.cedula + "</td>" + "<td>" + elementoEmpleado.nombre + "</td>" + "<td>" + elementoEmpleado.apellido + "</td>" + "<td>" + elementoEmpleado.sueldo + "</td></tr>";
    }
    empleadosTabla += "</table>"
    cmpTabla.innerHTML = empleadosTabla
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoIdentificado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoIdentificado = elementoEmpleado;
            break;
        }
    }
    return empleadoIdentificado;
}

agregarEmpleado = function (empleado) {
    let potencialEmpleado = buscarEmpleado(empleado.cedula);
    if (potencialEmpleado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let sinErrores = true;
    let errores = "";
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    // validacion para cedula
    if (valorCedula.length != 10) {
        errores += "Deben ser 10 caracteres. ";
        sinErrores = false;
    }
    for (let i = 0; i < valorCedula.length; i++) {
        if (isNaN(valorCedula[i])) {
            errores += "Todos los caracteres deben ser digitos. ";
            sinErrores = false;
            break;
        }
    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorCedula", errores);
        errores = "";
    }

    //validacion para nombre
    if (valorNombre.length < 3) {
        errores += "Debe ingresar al menos tres caracteres. ";
        sinErrores = false;
    }
    for (let i = 0; i < valorNombre.length; i++) {
        if (valorNombre.charCodeAt(i) < 65 || valorNombre.charCodeAt(i) > 90) {
            errores += "El nombre debe estar en mayusculas. "
            sinErrores = false;
            break;
        }
    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorNombre", errores);
        errores = ""
    }

    //validacion para apellido
    if (valorApellido.length < 3) {
        errores += "Debe ingresar al menos tres caracteres. ";
        sinErrores = false;
    }
    for (let i = 0; i < valorApellido.length; i++) {
        if (valorApellido.charCodeAt(i) < 65 || valorApellido.charCodeAt(i) > 90) {
            errores += "El apellido debe estar en mayusculas. ";
            sinErrores = false;
            break;
        }
    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorApellido", errores);
        errores = ""
    }

    //validacion para sueldo
    if (isNaN(valorSueldo) || valorSueldo == "") {
        sinErrores = false;
        errores += "*CAMPO OBLIGATORIO";
    }
    if (valorSueldo <= 400 || valorSueldo >= 5000 && isNaN(valorSueldo)) {
        sinErrores = false;
        errores += "La cantidad debe oscilar entre los 400 y 5000 dolares.";

    }
    if (sinErrores == false) {
        mostrarTexto("lblErrorSueldo", errores);
        errores = "";
    }
    //validacion para campo obligatorio
    if (valorCedula == "") {
        sinErrores = false;
        mostrarTexto("lblErrorCedula", "*CAMPO OBLIGATORIO");
    }
    if (valorNombre == "") {
        sinErrores = false;
        mostrarTexto("lblErrorNombre", "*CAMPO OBLIGATORIO");
    }
    if (valorApellido == "") {
        sinErrores = false;
        mostrarTexto("lblErrorApellido", "*CAMPO OBLIGATORIO");
    }
    if (sinErrores == true) {
        let empleado = {};
        empleado.cedula = valorCedula;
        empleado.nombre = valorNombre;
        empleado.apellido = valorApellido;
        empleado.sueldo = valorSueldo;
        if (esNuevo == true) {
            let nuevoEmpleado = agregarEmpleado(empleado);
            if (nuevoEmpleado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarCajas();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + valorCedula);
            }
        } else if (esNuevo == false) {
            let empleadoModificado = buscarEmpleado(empleado.cedula);
            empleadoModificado.nombre = valorNombre;
            empleadoModificado.apellido = valorApellido;
            empleadoModificado.sueldo = valorSueldo;

            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarCajas();
        }
    }
}

deshabilitarCajas = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda = function () {
    let busquedaCedula = recuperarTexto("txtBusquedaCedula");
    let busquedaEmpleado = buscarEmpleado(busquedaCedula);
    if (busquedaEmpleado == null) {
        alert("EL EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", busquedaEmpleado.cedula);
        mostrarTextoEnCaja("txtNombre", busquedaEmpleado.nombre);
        mostrarTextoEnCaja("txtApellido", busquedaEmpleado.apellido);
        mostrarTextoEnCaja("txtSueldo", busquedaEmpleado.sueldo);

        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");

        deshabilitarComponente("txtBusquedaCedula");
        habilitarComponente("btnGuardar");
    }
}

limpiar = function () { 
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo=false;
    deshabilitarCajas();


}
