
/*
Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
*/
const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'}
,{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const button = document.querySelector('button');

//Funcion eliminar ultimo elemento.
function borraElemento(){
    //Elimino el ultimo elemento.
    countries.pop();
    //Obtengo el contenido de la página y lo vacio.
    const contenido = document.body;
    contenido.innerHTML = '';
    //Pongo el boton que tengo guardado.
    contenido.append(button);
    //Cargo la lista.
    cargarLista();
}

//Funcion cargar imagenes.
function cargarLista(){
    
    for(country of countries){
        //Creo div añado h4 e img.
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = country.title;
        document.body.insertBefore(div,button);
        div.appendChild(h4);
        const img = document.createElement('img');
        //Añado a img su url.
        img.src = country.imgUrl;
        div.appendChild(img);
    }
}

window.onload = cargarLista();
button.addEventListener('click',borraElemento);
