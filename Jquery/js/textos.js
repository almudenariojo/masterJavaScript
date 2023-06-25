$(document).ready(function(){

    reloadLinks();
    $("#add_button").removeAttr('disabled'); //Elimina el atributo disabled del html

    $("#add_button").click(function(){
        $("#menu").append('<li><a href="'+$("#add_link").val() + '"></a></li>');

        $("#add_link").val(''); //Limpia  el input 
        reloadLinks();
    });
    
   //html: lo añade y borra lo demás
   //append: lo añade al final de los li
   //prepend: lo añade al principio de los li
   //before: lo añade fuera del elemento arriba
   //afther: lo añade fuera del elemento abajo
});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = $(this).attr("href");
     
        that.attr('target', '_blank'); //Lo abre en otra pestaña

        that.text(enlace);
    });
}
