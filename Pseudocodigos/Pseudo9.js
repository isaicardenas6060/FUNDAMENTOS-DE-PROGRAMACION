

function LeerNumeros(){
const prompt=require("prompt-sync")();
 
let numero1=parseInt(prompt("Ingresa un numero:"));
let numero2=parseInt(prompt("Ingresa otro numero:"));

if (numero1>numero2){
    suma= numero1 + numero2;
    console.log("La suma es:"+ suma);
}
if(numero2>numero1){
    sumatoria= numero2 + numero1;
    console.log("La summatoria es:"+ sumatoria);
}
if(numero1==numero2){
    producto= numero1*numero2;
    console.log("El producto es:"+ producto);
}

}
LeerNumeros()