/* Inicializamos con una funcion que contendra los eventos a utilizar */

window.addEventListener('load', function() {
  var body = document.getElementsByTagName('body');
  var list = document.getElementById('container-list');

  /* El evento hará que se oculte el input y muestre un formulario */

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

    section.removeChild(sectionForm);
      
    /* Al realizar este evento se mostrará un nuevo cuadro con el nombre de la lista agregada */
    
    button.addEventListener('click', function() {
      event.preventDefault();
      if (input.value) {
        var nameList = document.createElement('div');
        nameList.className = 'name-list';
            
        var textList = document.createElement('p');
        textList.textContent = input.value;
        textList.className = 'text-list';
          
        var tarea = document.createElement('a');
        var textTarea = document.createTextNode('Añadir una tarea...');
        tarea.className = 'text-tarea';
        tarea.setAttribute('href', '#');
        
        section.removeChild(form);
  
        tarea.appendChild(textTarea);
        nameList.appendChild(textList); 
        nameList.appendChild(tarea);
        section.appendChild(nameList);
  
        section.appendChild(form);

        input.value = '';
      }
  
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
                  
        nameList.removeChild(tarea);
      
              
        /* Al realizar este evento se mostrará el texto de la tarea debajo del título de la lista */
      
        addbutton.addEventListener('click', function() {
          if (textarea.value === '') {

          } else {
            var addList = document.createElement('p');
            addList.textContent = textarea.value;
            addList.className = 'add-list';
  
            nameList.removeChild(textarea);
  
            nameList.appendChild(addList);
            nameList.appendChild(textarea);
            nameList.appendChild(addbutton);

            textarea.value = '';
          }
        });
      });
    });
  });
});
