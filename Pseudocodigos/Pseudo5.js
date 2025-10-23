// MEDIDADAS INGLESAS

function ConvertirMedidas(){
let pulgadas=0.39371;
let pie=3.28084;
let libra=2.20462;
 
busto=89*pulgadas;
cintura=58*pulgadas;
Cadera=89*pulgadas;
altura=1.70*pie;
peso=53*libra;

console.log("las medidas medidas convertidas al sistema ingles son:");
console.log("busto:"+busto.toFixed(2)+" pulgadas");
console.log("cintura:"+cintura.toFixed(2)+" pulgadas");
console.log("cadera:"+Cadera.toFixed(2)+" pulgadas");
console.log("altura:"+altura.toFixed(2)+" pies");
console.log("peso:"+peso.toFixed(2)+" libras");
}
ConvertirMedidas();
