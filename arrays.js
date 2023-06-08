'use strict'

//arrays , arreglos, matrices 

var nombre = "almudena riojo";
var nombres = ["almu", "victor", "juan", 52, true];
var lenguajes = new Array("php", "js", "phyton"); 

console.log(nombre);
console.log(nombres);
console.log(lenguajes);

console.log(nombres[0]);//Acceder al elemento
console.log(nombres.length);//Acceder al elemento

var elemento = parseInt(prompt("¿qué elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el número correcto, menos que " + nombres.length);
} else {
    alert(nombres[elemento]);
}

document.write("<h1> Lenguajes de programacion del 2023</h1>")
document.write("<ul>")
/* for (var i = 0; i <= lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
} 

lenguajes.forEach((elemento, index, data) => {
    console.log(data);
 document.write("<li>" + index + "-" + elemento + "</li>");
});*/

for (let lenguaje in lenguajes) {
   document.write("<li>" + lenguajes[lenguaje] + "</li>");  
}

document.write("</ul>")

//Busquedas

var busqueda = lenguajes.find(lenguaje => lenguaje == "php"); //Si un elemento existe dentro de un array o no
console.log(busqueda);

var busqueda1 = lenguajes.findIndex(lenguaje => lenguaje == "php"); //el indice del elemento dentro de un array o no
console.log(busqueda1);

var precios = [10, 15, 20];
var busqueda2 = precios.some(precio => precio >= "15"); //buscar que cumplan una condicion los elemntos de una array
console.log(busqueda2);