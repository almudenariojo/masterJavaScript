
$(document).ready(function(){

    //Selector de ID
    var rojo = $("#rojo").css("background", "red")
                         .css("color", "white")
    console.log(rojo);

    //Selector de ID
    var amarillo = $("#amarillo").css("background", "yellow")
                         .css("color", "green")
   console.log(amarillo);

   //Selector de ID
   var verde= $("#verde").css("background", "green")
   .css("color", "yellow")
    console.log(verde);

   //Selector de clase
   $('.zebra').css("border", "5px dashed black");
   var miClase =  $('.zebra');
   miClase.css("border", "5px dashed blue");
   console.log(miClase);
   console.log(miClase.eq(1));

   $('.sinBorde').click(function(){
    console.log("Click dado")
    $(this).addClass('zebra');
   });

});
