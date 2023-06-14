'use strict'

//eventos del raton

window.addEventListener('load', () => {
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
        console.log(this);
        this.style.border = "10px solid black";
    });
    
    //mouse over
    
    boton.addEventListener('mouseover', function(){
        boton.style.background = "orange";
    });
    
    //mouseout
    
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black";
    });
    
    //Eventos
    
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("Esta dentro del input");
    });
    
    //Blur
    
    input.addEventListener('blur', function(){
        console.log("Esta fuera del input");
    });
    
    //KeyDown
    
    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
    
    //Keypress
    
    input.addEventListener('keypress', function(event){
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    
    //Keyup
    
    input.addEventListener('keyup', function(event){
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    });
});
// Final del load
