
function PotenciasNumero(){
    const prompt=require("prompt-sync")()
let num1
let Poten
let resultado=1

num1=parseInt(prompt("Ingresa tu numero que quieas elevar:"))
Poten=parseInt(prompt("Ingresa la potencia:"))

if(num1>0)
    for (i=1;1<=Poten;i++){
resultado=resultado*num1

 console.log(`El resultado de ${num1} elevado a ${Poten} es igual a:${resultado}`)
    }else{
       console.log(`El resultado de ${num1} elevado a ${Poten} es igual a:${resultado}`)
    }
} PotenciasNumero()
