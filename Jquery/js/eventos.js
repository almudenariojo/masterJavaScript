$(document).ready(function(){

    //MouseOver y MouseOut

    var caja = $("#caja"); // Selecciona el elemento con el id "caja" y lo asigna a la variable caja

    /*
    caja.mouseover(function(){
        $(this).css("background", "red"); // Cuando el cursor pasa por encima de caja, cambia el fondo a rojo
    });

    caja.mouseout(function(){
        $(this).css("background", "green"); // Cuando el cursor sale de caja, cambia el fondo a verde
    });
    */

    //Hover

    function cambiaAzul(){
        $(this).css("background", "blue"); // Cambia el fondo a azul cuando se activa el evento hover en caja
    }
    
    function cambiaRosa(){
        $(this).css("background", "pink"); // Cambia el fondo a rosa cuando se desactiva el evento hover en caja
    }
    
    caja.hover(cambiaAzul, cambiaRosa); // Asigna los manejadores de eventos cambiaAzul y cambiaRosa al evento hover de caja

 //Click
    
 caja.click(function(){
    $(this).css("background", "black"); // Cuando se hace clic en caja, cambia el fondo a negro
    $(this).css("color", "white"); // Cuando se hace clic en caja, cambia el color del texto a blanco
});

//Double Click

caja.dblclick(function(){
    $(this).css("background", "yellow"); // Cuando se hace doble clic en caja, cambia el fondo a amarillo
    $(this).css("color", "red"); // Cuando se hace doble clic en caja, cambia el color del texto a rojo
});

//Focus
var nombre = $("#nombre"); // Selecciona el elemento con el id "nombre" y lo asigna a la variable nombre
var datos = $("#datos");
nombre.focus(function(){
    $(this).css("background","green"); // Cuando el campo de entrada obtiene el foco, se establece un borde punteado verde de 2 píxeles
    console.log("Entro"); // Imprime un mensaje en la consola cuando se activa el evento focus
});

nombre.blur(function(){
    $(this).css("border","2px dashed black"); // Cuando el campo de entrada pierde el foco, se establece un borde punteado verde de 2 píxeles
    console.log("Salio"); // Imprime un mensaje en la consola cuando se activa el evento blur
    $("this").val();
    datos.text($(this).val()).show();
});

//Mousedown y mouseup

datos.mousedown(function(){ //Cuando presionas
    $(this).css("border-color", "gray");
});
datos.mouseup(function(){ //Cuando presionas
    $(this).css("border-color", "red");
});

//Mousemove

var sigueme = $("#sigueme");

$(document).mousemove(function(event){
    console.log("Coordenadas de x: " + event.clientX);
    console.log("Coordenadas de y: " + event.clientY);
    sigueme.css("left", event.clientX);
    sigueme.css("top", event.clientY);
    $('body').css("cursor", "none");
});

});
