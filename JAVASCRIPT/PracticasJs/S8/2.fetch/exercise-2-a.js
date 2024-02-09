//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.

const consultar = document.querySelector('button');
const input = document.querySelector('input');
const baseUrl = 'https://api.nationalize.io?name=';

consultar.addEventListener('click',e =>{
    fetch(baseUrl+input.value)
    .then((data) =>{
        console.log(`Consulta realizada aquí tienes la data:${data}`); 
    })
    .catch((error) =>{
        console.log(`Error:${error}`);
    })
    .finally(()=>{
        console.log(`Consulta finalizada.`);
    });
});