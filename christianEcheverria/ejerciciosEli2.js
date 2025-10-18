cargar = function(){
  // Al iniciar, mostramos INICIO y ocultamos las otras secciones
  mostrarComponente("divInicio");
  ocultarComponente("divEjercicio");
  ocultarComponente("divResultados");
}

mostrarInicio = function(){
  mostrarComponente("divInicio");
  ocultarComponente("divEjercicio");
  ocultarComponente("divResultados");
}

mostrarEjercicio = function(){
  ocultarComponente("divInicio");
  mostrarComponente("divEjercicio");
  ocultarComponente("divResultados");
}

mostrarResultados = function(){
  ocultarComponente("divInicio");
  ocultarComponente("divEjercicio");
  mostrarComponente("divResultados");
}

evaluar = function(){
  // 1) Recuperar y validar 5 notas
  let notas = [];
  for (let i=1; i<=5; i++){
    let v = parseFloat(recuperarTexto("n"+i));
    if (isNaN(v) || v<0 || v>10){
      alert("Ingrese notas válidas entre 0 y 10");
      return;
    }
    notas.push(v);
  }

  // 2) Calcular suma, promedio, mayor y menor
  let suma = 0;
  for (let i=0; i<notas.length; i++){ suma += notas[i]; }
  let promedio = suma / notas.length;
  let mayor = Math.max.apply(null, notas);
  let menor = Math.min.apply(null, notas);

  // 3) Determinar estado
  let estado = (promedio >= 7) ? "APROBADO" : "REPROBADO";

  // 4) Armar tabla de resultados
  let html = "<table><tr><th>PROMEDIO</th><th>MAYOR</th><th>MENOR</th><th>ESTADO</th></tr>";
  html += "<tr><td>"+promedio.toFixed(2)+"</td><td>"+mayor+"</td><td>"+menor+"</td><td>"+estado+"</td></tr></table>";

  document.getElementById("zonaResultados").innerHTML = html;
  mostrarResultados();
}

limpiar = function(){
  // Limpia los inputs del ejercicio
  for (let i=1; i<=5; i++){ document.getElementById("n"+i).value = ""; }
}
