//Operador ternario

let cal=parseInt(prompt("Ingresa calificacion"))
if (cal=7){                 //if normal
    console.log("aprobado")
}else{
    console.log("Reprobado")
}

/*se compone de 3 partes 
condicion 
valor verdadero
valor falso, una condicion en una sola linea*/

let resultado=calificacion>=7?"Aprobado":"Reprobado"
console.log(resultado)  //operador ternario 


/*se usa cuando sea 1 a 3 condiciones 
cuando son mas usar if normal*/

let resultado1=cal>6?"Bien": cal>8?"muy bien":"Exelente"
console.log(resultado)

// "?"=si entonces  ":"=else,sino
