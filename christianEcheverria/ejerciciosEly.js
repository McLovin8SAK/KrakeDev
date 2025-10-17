
// muestra un hola JS 
//pero junto a esto vas a imprimir la fecha y hora 
//actuales


const ahora = new Date();
console.log(`Hola, ${ahora.toLocaleString()}`);









const presente = new Date();
console.log(`Hola ${presente.toLocaleString}`);




//2- Variables
//Intercambio de variables 
//dos valores  a = 5 y b = 9 intercambiar sin 
//sin perder los valores 

let a = 5
let b = 9

let resultado = a
a = b
b = resultado

console.log(`a=${a},b=${b}`)




//3 - Datos 
//Declarar una variable de tipo primitivo 
//de cada uno de los que hay 
//(string,number,boolean, null)
// que tipo de variable es : typeof

let nombreS = "Juan"
console.log(typeof nombreS)

let edad = 30
console.log(typeof edad);

let esAdulto = true
console.log(typeof esAdulto);

let cualquierCosa = null
console.log(typeof cualquierCosa);

//4- Operadores
//Calcular el area y perimetro de un rectangulo 
//base = 8 y altura =5 

let base = 8;
let altura = 5;

let area = base * altura
let perimetro = (base * 2) + (altura * 2)

console.log(area)
console.log(perimetro)




// EJERCICIOS CASA.

//ejercicio 1

let nombre = "Christian"
let alias = "Gambo"
let edadMia = 30
let peso = 65.5

console.log(nombre.toUpperCase() + " " + alias.length + " " + typeof edadMia + " " + typeof peso)

//ejercicio 2

let x = 5

let y = 3

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

x++
console.log(x)

y--
console.log(y)

x += 2
console.log(x)



//ejercicio 3
let edadS = 20
let tieneEntrada = true
let esEstudiante = false

let acceso = (edad >= 18 && tieneEntrada) || (esEstudiante && tieneEntrada) ? console.log("ACCEDES") :
    console.log("ACESO DENEGADO")



//ejercicio 4

let producto = "Cafe latte"
let precioBase = 3.5
let iva = 12
let descuento = 10

let ivaDelCafe = precioBase * iva / 100 //saco el iva que son 42 ctvs
let precioConIva = precioBase + ivaDelCafe // sumo los 3.5 + .42 ctvs
let precioDelDescuento = precioConIva * descuento / 100 //saco el precio del descuento que son 39 ctvs
let precioFinal = precioConIva - precioDelDescuento// resto de los 3.92 el 10%

console.log("PRODUCTO: " + producto + " | BASE: $" + precioBase + " | FINAL: $" + precioFinal.toFixed(2))

//ejercicio 5

let mensaje = "Hola, Quito lindo!"
console.log(mensaje.length)
console.log(mensaje.charAt(0))
console.log(mensaje.charAt(4))
console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())

mensaje.length >= 10 ? console.log("LARGA") : console.log("CORTA")


// EJERCICIOS EN CASA 2.

//ejercicio 1

let persona = 25
if (persona < 18) {
    console.log("La persona es menor de edad")
} else if (persona >= 18 && persona < 65) {
    console.log("Es una persona adulta")
} else if (persona >= 65) {
    console.log("La persona es un adulto mayor")
}

// ejercicio 2

let miArreglo = [7, 10, 5, 8, 9]

let sumaNotas = miArreglo[0] + miArreglo[1] + miArreglo[2] + miArreglo[3] + miArreglo[4]

let promedio = sumaNotas / 5

console.log("El promedio del estudiante es " + promedio)


//ejercicio 3

let miArreglo2 = ["Juan", "Pedro", "Pablo", "Diego", "Alejandro", "Juan", "Pablo"]


let miSet = new Set(miArreglo2)

console.log(miSet)

//ejercicio 4

const palabras = ["zapatos", "camisas", "corbatas", "pantalones", "zapatos", "camisas", "camisas", "gorra", "corbatas", "zapatos", "medias", "medias", "sombrero", "bufanda", "pantalones", "zapatos", "zapatos"]





















