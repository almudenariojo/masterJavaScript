$(document).ready(function(){
  //Load
  //$('#datos').load("https://reqres.in/");
  
  //Obtener y Enviar (Get y Post)
  $.get("https://reqres.in/api/users", { page: 2 }, function(response){
    // Itera sobre los elementos en la propiedad 'data' del objeto 'response'
    response.data.forEach(function(element, index) {
      // Agrega un párrafo al elemento con el id 'datos' que muestra el nombre y apellido de cada usuario
      $("#datos").append("<p>"+ element.first_name + " " + element.last_name +  "</p>");
    });
  });

  // Maneja el envío del formulario
  $("#formulario").submit(function(e){
    e.preventDefault();
    // Crea un objeto 'usuario' con los valores de los campos de entrada del formulario
    var usuario = {
      name: $('input[name="nombre"]').val(),
      web: $('input[name="web"]').val()
    };
    console.log(usuario);

    // Envía una solicitud POST al destino especificado en el atributo 'action' del formulario, enviando el objeto 'usuario'
    /* 
    $.post($(this).attr("action"), usuario, function(response){
      console.log(response);
    }).done(function(){
      // Muestra una alerta cuando la solicitud se completa exitosamente
      alert("Usuario añadido correctamente");
    });
    */

    $.ajax({
      type: "POST",
      dataType: 'json',
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function () {
        // Antes de enviar la solicitud, muestra un mensaje en la consola
        console.log("Enviando usuario ...");
      }, 
      success: function(response){
        // Si la solicitud es exitosa, muestra la respuesta en la consola
        console.log(response);
      },
      error: function(){
        // Si ocurre un error durante la solicitud, muestra un mensaje en la consola
        console.log("Ha ocurrido un error");
      },
      timeout: 2000 // Establece un límite de tiempo de espera para la solicitud (en milisegundos)
    });
    
    return false;
    });
    
});

  
