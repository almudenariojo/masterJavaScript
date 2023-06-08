'use strict'

//Array dentro de otro array

var categorias = ["accion", "terror", "comedia"];
var peliculas = ["la vida es bella", "Un noche de amor", "La gran apuesta"];
console.log(peliculas);
console.log(peliculas.sort()); //Ordenar alfabeticamente
console.log(peliculas.reverse());  //Ordenar al reves

var cine = [categorias, peliculas];
//console.log(cine);
//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*var elemento = "";

do {
    elemento = prompt("introduce una pelicula hasta poner acabar");
    peliculas.push(elemento); //añade al array
} while (elemento != "acabar");

peliculas.pop(); //Elimina el ultimo elemento de un array

//peliculas.push("Batman");
console.log(peliculas); */

var indice = peliculas.indexOf("la vida es bella");
if (indice > -1) {
    peliculas.splice(indice, 1);
    
}
console.log(peliculas);

var peliculasString = peliculas.join(); //Convierte el array a texto
console.log(peliculasString);

var cadena = "texto1, texto2, texto3";
console.log(cadena); 
var cadenaArray= cadena.split(",");
console.log(cadenaArray); //convierte en array