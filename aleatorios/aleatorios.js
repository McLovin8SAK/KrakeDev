generarRandomico = function () {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 100;
    let numeroEntero = parseInt(numeroMultiplicado);
    let randomico = numeroEntero + 1;
    return randomico;
}

generarAleatorios = function () {
    let aleatorios = [];
    let numeroEntero = recuperarInt("txtCaja");
    if (numeroEntero >= 5 && numeroEntero <= 20) {
        for (let i = 0; i < numeroEntero; i++) {
            let numeroRandomico = generarRandomico();
            aleatorios.push(numeroRandomico);
            console.log(i);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table>"
    for(let i=0;i<arregloNumeros.length;i++){
        contenidoTabla+="<tr><td>"+arregloNumeros[i]+"</td></tr>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
