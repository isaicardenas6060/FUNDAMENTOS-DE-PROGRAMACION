

function venta(){

    libros= 568 * 4 -(568*4*0.20); //20% de descuento
    discos= 45 * 3 -(45*3*0.15);   //15% de descuento
    TocaDiscos= 678;               //sin descuento

 var SubTotal= libros+discos+TocaDiscos;    
 var DescuentoTotal= SubTotal * 0.02;
 var Total= SubTotal-DescuentoTotal;
   console.log("El total con descuento del 2% son:$" +Total.toFixed(2) +" PESOS");
}
venta()