

const prompt=require("prompt-sync")();

let contamina
contamina=parseInt(prompt("Cual es el indice de contaminacion:"));
if(contamina<38){
    console.log("Indice aceptable");
}
if(contamina>=38 && contamina<=55){
    console.log("El indice es desagradable");
}
if(contamina>55){
    console.log("Estamos mal");
}
