
/*
Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
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
function cargarLista(){
    
    for(country of countries){
        //Obtengo la id del país y nombro los elementos con su nombreElemento-id.
        const index = countries.indexOf(countries);
        const div = document.createElement('div');
        div.id = `div${index}`;

        const h4 = document.createElement('h4');
        h4.textContent = country.title;
        document.body.insertBefore(div,button);
        div.appendChild(h4);

        const img = document.createElement('img');
        img.id = `img${index}`;
        img.src = country.imgUrl;
        div.appendChild(img);
        //Creo y añado el boton.
        const btn = document.createElement('button');
        btn.id = `btn${index}`;
        btn.textContent = 'Borrar Elemento';
        div.appendChild(btn);
        //Añado su evento,en el que borro el elemento de la lista y vacío el div.
        btn.addEventListener('click', borrarMe =>{
            countries.splice(index,1);
            div.innerHTML = '';
        });
    }
}
window.onload = cargarLista();
button.addEventListener('click',borraElemento);
