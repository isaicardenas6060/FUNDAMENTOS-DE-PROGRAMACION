//tablas de multiplicar

const prompt=require("prompt-sync")();
let numero = parseInt(prompt("Ingresa un número que quieras multiplicsr:"));

if (!isNaN(numero)) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log("ingresa un número válido.");
}