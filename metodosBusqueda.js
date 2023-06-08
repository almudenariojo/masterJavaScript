'use strict'
var numero = 555;
var texto = "Me llamo Almu";
var texto1 = "Esto es un curso, un curso muy chuli";

var busqueda = texto1.indexOf("curso"); //Donde empieza
console.log(busqueda);

busqueda = texto1.lastIndexOf("curso"); //La ultima palabra
console.log(busqueda);

busqueda = texto1.search("curso"); //Igual que el indexOf
console.log(busqueda);

busqueda = texto1.match("curso"); //devuelve la primera coincidencia en array
console.log(busqueda);

busqueda = texto1.match(/curso/g); //devuelve todas las palabras
console.log(busqueda);

busqueda = texto1.substring(14, 5); //devuelve la palabra desde el 14 cinco en adelante
console.log(busqueda);

busqueda = texto1.charAt(12); //selecciona letra del string
console.log(busqueda);

busqueda = texto1.startsWith("es"); //busca al principio del texto y devuelve true o false
console.log(busqueda);

busqueda = texto1.endsWith("muy chuli"); //busca al final del texto y devuelve true o false
console.log(busqueda);

busqueda = texto1.includes("curso"); //si existe en el texto y devuelve true o false
console.log(busqueda);

busqueda = texto1.split(" "); //los separa 
console.log(busqueda);