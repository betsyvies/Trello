/* Inicializamos con una funcion que contendra los eventos a utilizar */

window.addEventListener('load', function() {
  var list = document.getElementById('container-list');
  list.addEventListener('click', showForm);
});

/* La funcion showForm oculta el input y muestra un formulario */

function showForm(event) {
  event.preventDefault();

  var containerForm = document.getElementById('new-form');
  var form = document.createElement('form');
  form.className = 'form';
    
  var input = document.createElement('input');
  input.className = 'container-input';
  input.setAttribute('placeholder', 'Añadir una lista...');

  var button = document.createElement('button');
  button.addEventListener('click', )
  var text = document.createTextNode('Guardar');
  button.className = 'container-button';
  
  button.appendChild(text);
  form.appendChild(input); 
  form.appendChild(button); 
  containerForm.appendChild(form);
};