'use strict';

var div_usuarios = document.querySelector("#usuarios"); // Obtener el elemento con el id "usuarios" del documento HTML
var div_janet = document.querySelector("#janet"); // Obtener el elemento con el id "janet" del documento HTML
var div_profesor = document.querySelector("#profesor"); // Obtener el elemento con el id "profesor" del documento HTML

getUsuarios()
  .then(data => data.json()) // Convertir la respuesta en formato JSON
  .then(users => {
    var listado = users.data; // Variable para almacenar los usuarios obtenidos desde la API

    listadoUsuarios(listado); // Llamada a la función listadoUsuarios con el listado de usuarios
    return getInfo();
  })
  .then(data => {
    div_profesor.innerHTML = data; // Mostrar la información del profesor en el elemento con el id "profesor"
    return getJanet();
  })
  .then(data => data.json()) // Convertir la respuesta en formato JSON
  .then(user => {
    mostrarJanet(user.data); // Mostrar el usuario "Janet" en el elemento con el id "janet"
  })
  .catch(error => {
    alert("Error en las peticiones");
    console.log(error + " Fallo"); // Manejar el error en caso de que ocurra
  });


function getUsuarios() {
  return fetch('https://reqres.in/api/users'); // Obtener la lista de usuarios desde la API utilizando la función fetch()
}

function getJanet() {
  return fetch('https://reqres.in/api/users/2'); // Obtener la información del usuario "Janet" desde la API utilizando la función fetch()
}

function getInfo() {
  var profesor = {
    nombre: "Almudena",
    apellidos: "Riojo",
    url: "https://google.com"
  };

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var profesor_string = JSON.stringify(profesor);

      if (typeof profesor_string !== "string" || profesor_string === "") {
        reject('error'); // Rechazar la promesa si hay un error al obtener la información del profesor
      } else {
        resolve(profesor_string); // Resolver la promesa con la información del profesor en formato JSON
      }
    }, 3000); // Esperar 3000 milisegundos (3 segundos) antes de resolver o rechazar la promesa
  });
}

function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement('h3');
    nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
    div_usuarios.appendChild(nombre);
  });

  document.querySelector(".loading").style.display = 'none'; // Ocultar el elemento de carga una vez se han mostrado los usuarios
}

function mostrarJanet(user) {
  console.log(user);

  let nombre = document.createElement('h4');
  let avatar = document.createElement('img');
  nombre.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = "100";
  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
  document.querySelector("#janet .loading").style.display = 'none'; // Ocultar el elemento de carga una vez se ha mostrado el usuario "Janet"
}









 

