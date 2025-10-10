let personas = [ //arreglo de personas
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kathe", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }

]

agregarPersona = function () {
    let sinErrores = true;
    let errores = "";
    let nombrePersona = recuperarTexto("txtNombre");
    let edadPersona = recuperarInt("txtEdad");

    //validación para nombre
    if (nombrePersona.length < 3) {
        mostrarTexto("lblError1", "Debe ingresar al menos 3 caracteres");
        sinErrores = false;
    }
    //validacion para edad
    if (isNaN(edadPersona)) {
        errores += "Debe ser un numero. "
        sinErrores = false;
    }
    if (edadPersona < 0 || edadPersona > 100) {
        errores += "El numero debe estar entre 0 y 100. "
        sinErrores = false;
    }
    if (sinErrores == false) {
        mostrarTexto("lblError2", errores);
        errores = "";
    }
    // si pasa las validaciones, crear objeto y agregarlo al arreglo
    if (sinErrores == true) {
        let nuevaPersona = {};
        nuevaPersona.nombre = nombrePersona;
        nuevaPersona.edad = edadPersona;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarTabla();
    }
}

mostrarTabla = function () {
    let cmpTabla = document.getElementById("tablaPersonas");
    let personasTabla = "<table><tr>" + "<th>EDAD</th>" + "<th>NOMBRE</th></tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        personasTabla += "<tr><td>" + elementoPersona.edad + "</td>" + "<td>" + elementoPersona.nombre + "</td></tr>";
    }
    personasTabla += "</table>";
    cmpTabla.innerHTML = personasTabla;
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    console.log(`Nombre: ${personaMayor.nombre}, Edad: ${personaMayor.edad}`);
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log(`Nombre: ${personaMayor.nombre}, Edad: ${personaMayor.edad}`);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarTexto("lblResultadoMayor", "La persona mayor es " + mayor.nombre + " " + mayor.edad);
}

encontrarMenor= function(){
    let personaMenor = personas[0];
    let elementoPersona;
    console.log(`Nombre: ${personaMenor.nombre}, Edad: ${personaMenor.edad}`);
    for(let i = 1; i<personas.length; i++){
        elementoPersona=personas[i];
        console.log(`Nombre: ${personaMenor.nombre}, Edad: ${personaMenor.edad}`);
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}

determinarMenor = function(){
    let menor = encontrarMenor();
    mostrarTexto("lblResultadoMenor", "La persona menor es " + menor.nombre + " " + menor.edad);
}