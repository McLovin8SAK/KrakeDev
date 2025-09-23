calcularPromedioNotas=function(){
    let nota1=recuperarFloat("lblNota1");
    let nota2=recuperarFloat("lblNota2");
    let nota3=recuperarFloat("lblNota3");

    let promedio=calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblResultado",promedio.toFixed(2));
    if(promedio<5 && promedio>0){
        mostrarTexto("lblAprobacion", "REPROBADO");
        mostrarImagen("lblImagen","cartmanEnojado.gif");
    }else if(promedio>=5 && promedio<=8){
        mostrarTexto("lblAprobacion", "BUEN TRABAJO");
        mostrarImagen("lblImagen","cartman.gif");
    }else if(promedio>8 && promedio<=10){
        mostrarTexto("lblAprobacion","EXCELENTE");
        mostrarImagen("lblImagen", "cartmanCool.gif");
    }else{
        mostrarTexto("lblAprobacion", "DATOS INCORRECTOS");
        mostrarImagen("lblImagen", "cartmanNo.gif");
    }
}