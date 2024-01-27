/*
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
//Creo el ul Encabezado de la lista.
const listaPaises = document.createElement('ul');
//Anado el contenido de texto y lo anado al body.
listaPaises.textContent = 'LISTA PAISES';
document.body.appendChild(listaPaises);
for(pais of countries){
    //Creo el elemento li y, le anado el texto de cada pais del array y lo anado como hijo al elemento ul.
    const paisLi = document.createElement('li');
    paisLi.textContent = pais;
    listaPaises.appendChild(paisLi);
     
}
