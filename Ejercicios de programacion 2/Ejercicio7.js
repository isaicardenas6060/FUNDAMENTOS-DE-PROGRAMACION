
const prompt=require("prompt-sync")()
let ContadorPares=0

while(true){
    var numero1=parseInt(prompt("Ingresa un numero:"))
    if(isNaN(numero1)){
        console.log("Ingresa un numero valido")
        continue;
    }
    if (numero1%2==0){
        ContadorPares++;
    }else{
        console.log("Ingresaste un numero impar.")
        break;
    }
}
console.log(`Cantidad de numeros pares ingresados: ${ContadorPares}`)
