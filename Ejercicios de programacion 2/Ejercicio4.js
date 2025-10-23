const prompt=require("prompt-sync")()

while(true){
    let letra=prompt("DESEAS CONTINUAR?:")
    if(letra==="N" || letra=="n"){
        console.log("FIN")
           break
    }
}
//Para textos no se usa el "parseInt"
//"break", si se cumple la accion termina el ciclo