//mayor de edad 
const prompt=require("prompt-sync")();
let numero1;
numero1=parseInt(prompt("ingresa tu edad:"));
{
    if(numero1>=18){
        console.log("acceso permitido");
    
}
    if(numero1<18){
        console.log("acceso denegado");
    }
}