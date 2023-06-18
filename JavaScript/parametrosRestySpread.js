'use strict'

//Parametros rest  y spread

function listadoFrutas(fruta1, fruta2, ...restoFrutas) { //parametro rest
    console.log("Fruta 1 " + fruta1);
    console.log("Fruta 2 " + fruta2);
    console.log(restoFrutas);
}

listadoFrutas("Naranja", "Fresa", "Sandia", "Pera", "Coco");

var frutas = ["Naranja", "Fresa"];
listadoFrutas(...frutas, "Sandia", "Pera", "Coco"); //parametro Spread