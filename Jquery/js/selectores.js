$(document).ready(function(){
    // Este código se ejecuta cuando el documento HTML ha cargado completamente

    // Selector de ID
    var rojo = $("#rojo").css("background", "red") // Selecciona el elemento con el ID "rojo" y cambia su fondo a rojo
                         .css("color", "white"); // Cambia el color de texto a blanco
    console.log(rojo);

    // Selector de ID
    var amarillo = $("#amarillo").css("background", "yellow") // Selecciona el elemento con el ID "amarillo" y cambia su fondo a amarillo
                                 .css("color", "green"); // Cambia el color de texto a verde
    console.log(amarillo);

    // Selector de ID
    var verde= $("#verde").css("background", "green") // Selecciona el elemento con el ID "verde" y cambia su fondo a verde
                          .css("color", "yellow"); // Cambia el color de texto a amarillo
    console.log(verde);

    // Selector de clase
    var miClase = $('.zebra').css("border", "5px dashed black"); // Selecciona todos los elementos con la clase "zebra" y les aplica un borde punteado de color negro
    console.log(miClase);
    console.log(miClase.eq(1)); // Muestra el segundo elemento de la colección de elementos seleccionados por la clase "zebra"

    $('.sinBorde').click(function(){
        // Cuando un elemento con la clase "sinBorde" es clicado
        $(this).addClass('zebra'); // Añade la clase "zebra" al elemento clicado
        console.log("Click dado");
    });

    // Selectores de etiquetas
    var parrafos = $('p').css("cursor","pointer"); // Selecciona todos los elementos <p> y cambia el cursor del mouse a un puntero

    parrafos.click(function(){
        // Cuando un párrafo es clicado
        var parr = $(this);

        if(!parr.hasClass('grande')){
            // Si el párrafo no tiene la clase "grande"
            parr.addClass("grande"); // Añade la clase "grande" al párrafo
        } else {
            parr.removeClass('grande'); // Si el párrafo tiene la clase "grande", la remueve
        }
    });

// Selectores de atributo
$('[title="Google"]').css('background', '#ccc');
$('[title="Facebook"]').css('background', 'blue');
$('[title="Yahoo"]').css('background', 'yellow');
$('[title="Twitter"]').css('background', 'orange');

//Otros

$('p,a').addClass("margenSuperior");

// Búsqueda de elementos en el DOM
var busqueda = $("#elemento1") // Selecciona el elemento con el ID "elemento1"
                .parent() // Selecciona el elemento padre del elemento con el ID "elemento1"
                .parent() // Selecciona el elemento padre del padre del elemento con el ID "elemento1"
                .find('.resaltado') // Busca los elementos descendientes con la clase "resaltado"
                .css("color", "blue"); // Cambia el color de texto de los elementos encontrados a azul

console.log(busqueda); // Muestra en la consola los elementos encontrados



});

