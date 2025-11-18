//Declaracion de areglos "array"

/*
Tipos de datos primitivos:
Number
String
Boolean
Null
Undifined
Tipos de datos compuestos:
Object
Array
Function
*/

function DatosDeArray(){
    let datos=[3,7,9,3,2,6];
   /*  let suma=0
    for(i=0;i<datos.length;i++)
        
        if(datos[i]%2===0){
        suma+=datos[i]
        }
   
    console.log(`la  suma de los datos es ${suma}`)

  // for.. of */
  /* for(let numeros of datos){
    console.log(`los datos del arreglo son: ${numeros}`)
   }
   */

    //for.. in
/* for(let numeros in datos){
    console.log(`los datos del arreglo son: ${datos[numeros]}`)
} */

    //for..each
   /*  datos.forEach(function(numeros){
         console.log(numeros)
    }) */

    /* datos.forEach(datos=>console.log(datos)) */

//while
/* let i=0; */
/* while(i<datos.length){
    console.log([i]);
    i++
}*/
//do   
/* 
   do{
    console.log(datos[i]);
    i++;

}while(i<datos.length) */

//.map
/* datos.map(numero=>console.log(numero*2)) */

//filter
/* const NewArray=datos.filter((numero)=>{
    return datos<7
})
console.log(NewArray); */

/* let suma=0
datos.reduce((a,b)=>suma=a+b)
console.log(suma); */
  
} 
DatosDeArray();


// para sacar todo de un arreglo es recorrerlo con un for
//la variable para llamarla es "variable de array[i]" "el iterador"