calcularPromedioNotas=function(){
    let nota1=recuperarFloat("lblNota1");
    let nota2=recuperarFloat("lblNota2");
    let nota3=recuperarFloat("lblNota3");

    let promedio=calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblResultado",promedio.toFixed(2));
}