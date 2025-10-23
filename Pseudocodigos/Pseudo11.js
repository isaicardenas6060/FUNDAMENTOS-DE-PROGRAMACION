
const prompt=require("prompt-sync")();

 let numN=parseInt(prompt("ingresa un numero:"));
if (isNaN(numN) || numN<1){
    console.log("Ingresa un numero entro psitivo");
}
let impares=[];
for(let i = 1; i <= numN; i++){
    if(i % 2 !== 0){
        impares.push(i);
    }
}
console.log("numeros impares de 1 hasta " + numN + ":");
console.log(impares.join(","));

console.log("cantidad de numeros impares:", impares.length);

