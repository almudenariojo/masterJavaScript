$(document).ready(function(){
    //Mover elemnto por la página
    $(".elemento").draggable();
    //Redimensionar
    $(".elemento").resizable();
    //Seleccionar y ordenar elementos (Selectable y sortable no pueden ir juntos)
   // $(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, iu){
         console.log("Ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del área");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("explode"); 
        //Otros efectos: "blind", "slide", "drop", "fold", "puff", "escale", ("shake",4000) ..
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    //Datepicker
    $("#calendario").datepicker(); 

  
});