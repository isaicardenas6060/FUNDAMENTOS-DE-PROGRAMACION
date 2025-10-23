function Solicitud(){
const prompt=require("prompt-sync")()

let Edad=parseInt(prompt("Ingresa tu edad:"))
let Nota=parseInt(prompt("Ingresa tu nota:"))
let Sexo=prompt("Ingresa tu genero (M/F):")

if(Nota>=5 && Edad>=18){
    if(Sexo.toUpperCase()=="M"){
resultado="POSIBLE"
    } else if(Sexo.toUpperCase()==="F"){
        resultado="ACEPTADA"
    }else{
        resultado="NO ACEPTADO"
} 
}
console.log(`EL RESULTADO ES:${resultado}`)
}
Solicitud()