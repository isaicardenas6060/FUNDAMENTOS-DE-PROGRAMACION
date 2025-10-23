
const prompt=require("prompt-sync")()


let todo=[]

while(true){
   let numero=parseInt(prompt("Tecleea un numero:"))
   if (isNaN(numero)){
    console.log("ingresa un valor numerico")
    continue
   }
   if (numero===0){
       console.log("Numeros ingresados",todo);
       break
   }
   todo.push(numero)
}

//se usa un arreglo para almacenar los numeros ingresados "[]"