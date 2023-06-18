'use strict'

//DOM document Object Model

function cambiaColor(color) {
    caja.style.color = color;
}

//Conseguir los elementos por un id

//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");
caja.innerHTML = "Texto en la caja html desde js";
caja.style.background = "red";
caja.style.color = "white";
caja.style.padding = "20px";
caja.className = "hola";
cambiaColor("blue");
console.log(caja);

//Conseguir los elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

console.log(todosLosDivs);

var valor;
for (valor in todosLosDivs) {
    console.log(todosLosDivs[valor]);
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
       seccion.append(parrafo);
    }  
    }   

seccion.append(hr);

//Conseguir los elementos por su clase css

var divRojos = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");
divAmarillos[0].style.background = "yellow";
var div;
for (div in divRojos) {
    if (divRojos[div].className == "rojo") {
          divRojos[div].style.background = "red";
    }
}
   console.log(divRojos);

// Query selector

var id = document.querySelector("#parrafo");
console.log(id);

var claseRojo = document.querySelector("#divRojos");
console.log(claseRojo);







