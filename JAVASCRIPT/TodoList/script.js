const addTaskButton = document.body.getElementsByClassName('btn-add')[0];
const input = document.getElementById('taskInput');
const tareasContainer = document.getElementsByClassName('li-container')[0];
const listaTareas = document.getElementById('lista-tareas');
const empty = document.getElementsByClassName('empty')[0];
const form = document.querySelector('.search form');

function agregarTarea(){
    const div = document.createElement('div');
    div.className = 'div-task'
    const p = document.createElement('p');
    p.textContent = input.value;
    const dropTaskButton = document.createElement('button');
    dropTaskButton.textContent = 'x';
    dropTaskButton.className = 'btn-delete';
    div.appendChild(p);
    div.appendChild(dropTaskButton);
    listaTareas.appendChild(div);

    dropTaskButton.addEventListener('click',()=>{
        div.innerHTML = "";
        div.remove();
        comprobarTareas();

    });

   
}

function comprobarTareas(){
    //Si hay 0 divs dentro es que esta vacía.
    if(listaTareas.querySelectorAll('div').length === 0){
        empty.style.display = 'block';

    }
    else{
        empty.style.display = 'none';

    }
}

form.addEventListener('submit',(e) =>{
    //Previene la acción por defecto del formulario.(Enviar el formulario).
    e.preventDefault();
    if(input.value != ""){
        agregarTarea();

    }
    comprobarTareas();
    input.value = "";

});



