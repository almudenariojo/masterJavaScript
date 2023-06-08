'use strict'

//eventos del raton

function cambiarColor() {
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
         
    } else {
        boton.style.background = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;
}

var boton = document.querySelector("#boton");
console.log("Me has dado click");

//click
boton.addEventListener('click', function(){
    cambiarColor();
});

//mouse over

boton.addEventListener('mouseover', function(){
    boton.style.background = "orange";
});

//mouseout

boton.addEventListener('mouseout', function(){
    boton.style.background = "black";
});