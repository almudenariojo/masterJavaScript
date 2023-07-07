$(document).ready(function(){
    //Load
    //$('#datos').load("https://reqres.in/");
  
    //Get y Post
    $.get("https://reqres.in/api/users", { page: 2 }, function(response){
      // Itera sobre los elementos en la propiedad 'data' del objeto 'response'
      response.data.forEach(function(element, index) {
        // Agrega un párrafo al elemento con el id 'datos'
        $("#datos").append("<p>"+ element.first_name + " " + element.last_name +  "</p>");
      });
    });
var usuario = {
    name : "Almudena Riojo",
    web : "google.com"
}   
 $.post("https://reqres.in/api/users", usuario, function(response){
console.log(response);
 });
  });
  
