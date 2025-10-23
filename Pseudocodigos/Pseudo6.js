//HORAS DE SUEÑO EN TU VIDA

const prompt=require("prompt-sync")();
function Dormir(){

  var HorasDormi;
  var HorasSueno;
  var Edad;

HorasSueno=parseInt(prompt("cuantas horas duermes en promedio:"));
Edad=parseInt(prompt("que edad tienes:"));

HorasDormi=Edad*365*HorasSueno;
console.log("tu haz dormido:" + HorasDormi.toFixed(2) + " horas en tu vida");
}
Dormir()