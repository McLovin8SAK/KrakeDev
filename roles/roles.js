let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1740418522", nombre: "Alan", apellido: "Brito", sueldo: 750.0 }
]

let roles = [];

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

    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
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
    esNuevo = false;
    deshabilitarCajas();
}

buscarPorRol = function () {
    let cedulaEnRol = recuperarTexto("txtBusquedaCedulaRol");
    let empleadoRol = buscarEmpleado(cedulaEnRol);
    if (empleadoRol != null) {
        mostrarTexto("infoCedula", empleadoRol.cedula);
        mostrarTexto("infoNombre", empleadoRol.nombre + " " + empleadoRol.apellido);
        mostrarTexto("infoSueldo", empleadoRol.sueldo);
    } else {
        alert("EL EMPLEADO NO EXISTE");
    }
}

calcularAporteEmpleado = function (sueldo) {
    let aporteDelEmpleado = sueldo * 9.45 / 100;
    return aporteDelEmpleado;
}

calcularValorAPagar = function (sueldo, iess, descuento) {
    let valorCalculado = sueldo - (iess + descuento);
    return valorCalculado;
}

calcularRol = function () {
    let sueldoRol = recuperarFloatDiv("infoSueldo");
    let descuentosRol = recuperarFloat("txtDescuentos");
    if (descuentosRol >= 0 && descuentosRol <= sueldoRol) {
        let aporteRol = calcularAporteEmpleado(sueldoRol);
        mostrarTexto("infoIESS", aporteRol.toFixed(2));

        let totalAPagar = calcularValorAPagar(sueldoRol, aporteRol, descuentosRol);
        mostrarTexto("infoPago", totalAPagar.toFixed(2));
        habilitarComponente("btnGuardarRol");
    } else {
        alert("El descuento debe ser mayor o igual a 0 y menor o igual al sueldo");
    }
}

buscarRol = function (cedula) {
    let elementoRol;
    let rolIndentificado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i]
        if (elementoRol.cedula == cedula) {
            rolIndentificado = elementoRol;
            break;
        } else {
            return null;
        }

    }
    return rolIndentificado;
}

agregarRol = function (rol) {
    let rolEnBusqueda = buscarRol(rol.cedula);
    if (rolEnBusqueda == null) {
        roles.push(rol);
        alert("PROCESO REALIZADO CON EXITO");
    } else {
        alert("YA EXISTE UN  ROL CON LOS DATOS INGRESADOS");
    }
}

calcularAporteEmpleador = function (sueldo) {
    let aporteEmpleador = sueldo * 11.15 / 100;
    return aporteEmpleador;
}

guardarRol = function () {
    let valorPagoTotalRol = recuperarFloatDiv("infoPago");
    let valorIessRol = recuperarFloatDiv("infoIESS");
    let valorNombreRol = recuperarTextoDiv("infoNombre");
    let valorCedulaRol = recuperarTextoDiv("infoCedula");
    let valorSueldoRol = recuperarFloatDiv("infoSueldo");

    let valorAporteEmpleadorRol = calcularAporteEmpleador(valorSueldoRol);

    let rol = {};
    rol.cedula = valorCedulaRol;
    rol.nombre = valorNombreRol;
    rol.sueldo = valorSueldoRol;
    rol.aporteEmpleado = valorIessRol;
    rol.valorAPagar = valorPagoTotalRol;
    rol.aporteEmpleador = valorAporteEmpleadorRol;

    agregarRol(rol);
    alert("ROL GUARDADO EXITOSAMENTE");
    deshabilitarComponente("btnGuardarRol");
    mostrarTotales();

}

mostrarRoles = function () {
    let cmpTablaRol = document.getElementById("tablaResumen");
    let rolesTabla = "<table><tr>" + "<th>CEDULA</th>" + "<th>NOMBRE</th>" + "<th>VALOR A PAGAR</th>" + "<th>APORTE EMPLEADO</th>" + "<th>APORTE EMPLEADOR</th></tr>";
    let elementoRoles;
    for (let i = 0; i < roles.length; i++) {
        elementoRoles = roles[i];
        rolesTabla += "<tr><td>" + elementoRoles.cedula + "</td>" + "<td>" + elementoRoles.nombre + "</td>" + "<td>" + elementoRoles.valorAPagar.toFixed(2) + "</td>" + "<td>" + elementoRoles.aporteEmpleado.toFixed(2) + "</td>" + "<td>" + elementoRoles.aporteEmpleador.toFixed(2) + "</td></tr>";
    }
    rolesTabla += "</table>";
    cmpTablaRol.innerHTML = rolesTabla;
}

mostrarTotales = function () {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aporteEmpleado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));

    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    mostrarTexto("infoTotalNomina", totalNomina.toFixed(2));
}
