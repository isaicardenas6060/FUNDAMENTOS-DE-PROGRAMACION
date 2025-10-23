
const prompt=require("prompt-sync")();
let numero1;

while(true){
    numero1=parseInt(prompt("Ingresa un numero del 1 al 5:"))
    if(!isNaN(numero1) && numero1 >=1 && numero1 <=5){
        console.log("Numero valido")
        break;
    }else{
        console.log("Numero invalido, intente otra vez")
    }
}

//"!isNaN", para verificar que se ingresa un valor numerico
