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

    if(producto1.stock==producto2.stock){
        console.log("Ambos productos tienen el mismo stock");
    }
    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else{
        console.log("Producto 2 tiene mayo stock");
    }

}