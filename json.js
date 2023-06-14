'use strict'

//JSON JavaScrip Object Notation


var pelicula = {
    titulo: "Batman vs Spiderman",
    year: 2017,
    pais: "Estado Unidos"
}

pelicula.titulo ="Superman";
console.log(pelicula);

var peliculas = [
   { titulo: "La verdad suele", year : 2081, pais: "Francia"},
   pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo +  " - " + peliculas[index].year );
    caja_peliculas.append(p);
}


