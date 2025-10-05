probarAtributos = function () {
    let persona = {
        nombre: "Christian",
        apellido: "Echeverria",
        edad: 30,
        estaVivo: true
    }
    console.log(persona.apellido);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No esta vivo");
    } else {
        console.log("Esta vivo, lamentablemente");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "cerveza",
        precio: 2.60,
        stock: 10
    }
    console.log(producto1.nombre);

    let producto2 = {
        nombre: "zapatos",
        precio: 30.99,
        stock: 5
    }
    console.log(producto2.precio);

    if (producto1.stock == producto2.stock) {
        console.log("Ambos productos tienen el mismo stock");
    }
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else {
        console.log("Producto 2 tiene mayo stock");
    }

}

modificarAtributos = function () {
    let cuenta = {
        numero: "4053467834",
        saldo: 0.0
    }
    cuenta.saldo = 100
    cuenta.saldo += 10
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "1720456547",
        nombre: "Magnus"
    }
    let cliente1 = {};
    cliente1.nombre = "Pablo",
        cliente1.apellido = "Perez",
        cliente1.cedula = "1234567890"
}

probarIncrementoSaldo = function () {
    let cta = { numero: "3412234", saldo: 37.0 }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo)
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto
}

probarDeterminarMayor = function () {
    let per1 = { nombre: "Pablo", edad: 35 }
    let per2 = { nombre: "Juan", edad: 47 }
    let mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es " + mayor.nombre);
    }

}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}