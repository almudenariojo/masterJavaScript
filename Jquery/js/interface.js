$(document).ready(function() {
    // Mover elemento por la página
    $(".elemento").draggable();
  
    // Redimensionar elemento
    $(".elemento").resizable();
  
    // Seleccionar y ordenar elementos (Selectable y sortable no pueden ir juntos)
    // $(".lista-seleccionable").selectable();
  
    // Ordenar elementos de la lista y manejar el evento de actualización
    $(".lista-seleccionable").sortable({
      update: function(event, ui) {
        console.log("Ha cambiado la lista");
      }
    });
  
    // Arrastrar elemento y soltarlo en un área específica
    $("#elemento-movido").draggable();
    $("#area").droppable({
      drop: function() {
        console.log("Has soltado algo dentro del área");
      }
    });
  
    // Mostrar u ocultar elemento con un efecto de explosión
    $("#mostrar").click(function() {
      $(".caja-efectos").toggle("explode");
      // Otros efectos: "blind", "slide", "drop", "fold", "puff", "scale", ("shake", 4000) ..
    });
  
    // Mostrar información emergente (tooltip)
    $(document).tooltip();
  
    // Mostrar diálogo emergente (popup)
    $("#lanzar-popup").click(function() {
      $("#popup").dialog();
    });
  
    // Seleccionar fecha en un calendario
    $("#calendario").datepicker();
  
    // Crear pestañas
    $("#pestanas").tabs();
  });
  