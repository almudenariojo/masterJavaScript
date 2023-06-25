$(document).ready(function(){

    // Ocultar el elemento con ID "mostrar"
    $("#mostrar").hide();

    // Cuando se hace clic en el elemento con ID "mostrar"
    $("#mostrar").click(function(){
        $(this).hide(); // Ocultar el elemento "mostrar"
        $("#ocultar").show(); // Mostrar el elemento "ocultar"

        // Mostrar el elemento con ID "caja" deslizándolo hacia abajo lentamente
        $("#caja").slideDown('slow');

        // También puedes usar otras animaciones en lugar de slideDown:
        // $("#caja").show('fast'); // Mostrar rápidamente
        // $("#caja").fadeIn('slow'); // Mostrar con fundido gradual
        // $("#caja").fadeTo('slow', 0.8); // Mostrar con opacidad gradual (0.8 indica 80% de opacidad)
    });


    // Cuando se hace clic en el elemento con ID "ocultar"
    $("#ocultar").click(function(){
        $(this).hide(); // Ocultar el elemento "ocultar"
        $("#mostrar").show(); // Mostrar el elemento "mostrar"

        // Ocultar el elemento con ID "caja" deslizándolo hacia arriba lentamente
        $("#caja").slideUp('slow');

        // También puedes usar otras animaciones en lugar de slideUp:
        // $("#caja").hide('fast'); // Ocultar rápidamente
        // $("#caja").fadeOut('slow'); // Ocultar con fundido gradual
        // $("#caja").fadeTo('slow', 0.2); // Ocultar con opacidad gradual (0.2 indica 20% de opacidad)
    });

    // Cuando se hace clic en el elemento con ID "todoenuno"
    $("#todoenuno").click(function(){
        // Alternar la visibilidad del elemento con ID "caja" deslizándolo rápidamente
        $("#caja").slideToggle('fast');

        // También puedes usar otras animaciones en lugar de slideToggle:
        // $("#caja").toggle('fast'); // Alternar rápidamente entre mostrar y ocultar
        // $("#caja").fadeToggle('fast'); // Alternar con fundido gradual
    });

});
