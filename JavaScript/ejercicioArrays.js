'use strict'
/* pida 6 numeros por pantalla, y los meta en un array y mostralos*/

function mostrarNumeros(elementos, textoCustom = "") {
    //Mostrar numeros en el cuerpo de la página
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
});
    document.write("</ul>");
}
//Pedir 6 numeros
var numeros = [];

//solicitar 6 numeros al usuario
for (var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduzca un numero, 0")));
}

mostrarNumeros(numeros, );

//Mostrar en consola
console.log(numeros);

//Ordenar
numeros.sort(function(a,b){return(a-b)}); //ordena numericamente
mostrarNumeros(numeros, " ordenado");
 numeros.reverse();
mostrarNumeros(numeros, " reverse");

//contar elementos
var contarN = numeros.length;
document.write("el array tiene " + contarN + " numeros" + "<br>");

//Busquedas
var busqueda = (parseInt(prompt("Introduzca un numero a buscar, 0")));

var posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1) {
    document.write("Encontrado:" + "<br>");
    document.write("Posición de la busqueda:" + posicion + "<br>");
} else {
    document.write("Numero no encontrado");
}
