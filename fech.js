'use strict';

var div_usuarios = document.querySelector("#usuarios");

function mostrarUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let nombre = document.createElement('h3');
    nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
    div_usuarios.appendChild(nombre);
  });

  document.querySelector(".loading").style.display = 'none';
}

function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

fetch('https://reqres.in/api/users')
  .then(data => data.json())
  .then(users => {
    var listaUsuarios = users.data;
    mostrarUsuarios(listaUsuarios);
  });

 getUsuarios();
 getJanet();