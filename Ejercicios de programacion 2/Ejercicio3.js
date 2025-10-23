function calcularCostoViaje() {
    const prompt=require("prompt-sync")()
  let costoPorAlumno;
  let pagoTotal;

   numeroAlumnos=parseInt(prompt("CUANTOS ALUMOS SON:"))

  if (numeroAlumnos >= 100) {
    costoPorAlumno = 65;
    pagoTotal = numeroAlumnos * costoPorAlumno;
  } else if (numeroAlumnos >= 50) {
    costoPorAlumno = 70;
    pagoTotal = numeroAlumnos * costoPorAlumno;
  } else if (numeroAlumnos >= 30) {
    costoPorAlumno = 95;
    pagoTotal = numeroAlumnos * costoPorAlumno;
  } else {
    costoPorAlumno = 4000 / numeroAlumnos;
    pagoTotal = 4000;
  }

  console.log(`Número de alumnos: ${numeroAlumnos}`);
  console.log(`Pago total a la compañía: $${pagoTotal.toFixed(2)}`);
  console.log(`Cada alumno debe pagar: $${costoPorAlumno.toFixed(2)}`);

  };
calcularCostoViaje();

//".toFixed(2)" para redondear los numeros decimales