
function ImparPar(){
const prompt=require("prompt-sync")();
let numeN=parseInt(prompt("Ingresa un numero:"));

if(numeN<=0){
    console.log("El numero debe ser mayor que 0");
}
 if(numeN % 2 === 0){
    console.log(numeN+" Es un numero par");
 } else{
    console.log(numeN+" Es un numero impar");
 }
}
ImparPar();