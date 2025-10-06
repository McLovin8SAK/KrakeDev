let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1740418522", nombre: "Alan", apellido: "Brito", sueldo: 750.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();

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
    cmpTabla.innerHTML=empleadosTabla
}
