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
    let suma=0
    for(i=0;i<datos.length;i++)
        
        if(datos[i]%2===0){
        suma+=datos[i]
        }
   
    console.log(`la  suma de los datos es ${suma}`)

}
DatosDeArray(); // para sacar todo de un arreglo es recorrerlo con un for
//la variable para llamarla es "variable de array[i]" "el iterador"