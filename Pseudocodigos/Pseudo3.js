//calificacion
const prompt=require("prompt-sync")();
let numero1;
numero1=parseInt(prompt("Ingresa la calificacion:"));
{
if(numero1>=90 && numero1<=100){
    console.log("Exelente");
}
if(numero1<90 && numero1 >=70){
    console.log("Bien");
}
if(numero1<70){
    console.log("Reprovado");
}
}