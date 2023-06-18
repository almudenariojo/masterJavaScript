'use strict'
var numero = 555;
var texto = "Me llamo Almu";
var texto1 = "Esto es un curso, un curso muy chuli";

var reemplaza = texto1.replace("curso", "clase"); // Reemplaza una palabra por otra
console.log(reemplaza);


var reemplaza = texto1.slice(3); //Recorta
console.log(reemplaza);

var reemplaza = texto1.slice(3, 5); //Recorta
console.log(reemplaza);

var reemplaza = texto1.trim(); // Elimina espacios sobrantes al principio y al final
console.log(reemplaza);