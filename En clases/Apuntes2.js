
const prompt=require("prompt-sync")();
function calificacion(){

    let cal=parseInt(prompt("Ingresa tu calificacion:"));
    let resultado=cal >6 && cal <8?"Regular": cal>=8?"Exelente":"Reprobado";

    console.log(`La calificacion de:${cal} y es: ${resultado}`);
} 
calificacion();