/* Inicializamos con una funcion que contendra los eventos a utilizar */

window.addEventListener('load', function() {
  var body = document.getElementsByTagName('body');
  var list = document.getElementById('container-list');

  /* La el evento hará que se oculte el input y muestre un formulario */

  list.addEventListener('click', function() {
    event.preventDefault();
    
    var section = document.getElementById('container-form');
    var sectionForm = document.getElementById('section-form');
       
    var form = document.createElement('form');
    form.className = 'form';
        
    var input = document.createElement('input');
    input.className = 'container-input';
    input.setAttribute('placeholder', 'Añadir una lista...');
    
    var button = document.createElement('button');
    var text = document.createTextNode('Guardar');
    button.className = 'container-button';
      
    button.appendChild(text);
    form.appendChild(input); 
    form.appendChild(button); 
    section.appendChild(form);

    sectionForm.removeChild(list);
    section.removeChild(sectionForm);
      
    /* Al realizar este evento se mostrará un nuevo cuadro con el nombre de la lista agregada */
    
    button.addEventListener('click', function() {
      event.preventDefault();
        
      var nameList = document.createElement('div');
      nameList.className = 'name-list';
          
      var textList = document.createElement('p');
      textList.innerText = input.value;
      textList.className = 'text-list';
        
      var tarea = document.createElement('p');
      var textTarea = document.createTextNode('Añadir una tarea...');
      tarea.className = 'text-tarea';
      
      tarea.appendChild(textTarea);
      nameList.appendChild(textList); 
      nameList.appendChild(tarea);
      section.appendChild(nameList);

      button.removeChild(text);
      form.removeChild(input); 
      form.removeChild(button); 
      section.removeChild(form);

      /* Al realizar este evento se mostrará un formulario con un textarea y un botón */
      
      tarea.addEventListener('click', function() {
        var textarea = document.createElement('textarea');
        textarea.className = 'textarea';

        var addbutton = document.createElement('button');
        var addText = document.createTextNode('Añadir');
        addbutton.className = 'add-button';

        nameList.appendChild(textarea);
        addbutton.appendChild(addText);
        nameList.appendChild(addbutton);
                
        tarea.removeChild(textTarea);
        nameList.removeChild(tarea);
      });

      /* debugger; */
    });
  });
});
