// positivo, negativo, cero
const prompt=require("prompt-sync")();
let numero1;
numero1=parseInt(prompt("ingresa un numero:"));
{
if(numero1>0){
console.log("tu numero es positivo");
}

else if(numero1<0){
console.log("tu nummero es negativo");
}

else {
console.log("tu numero es 0");
}
} 

