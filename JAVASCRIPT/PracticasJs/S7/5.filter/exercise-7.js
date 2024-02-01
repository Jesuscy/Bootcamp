/*
Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
 introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

*/

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
                   {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const content = document.body;
const divStreamers = document.createElement('div');
content.appendChild(divStreamers);
const input = document.querySelector('input[data-function="toFilterStreamers"]');     


function findStreamers(nombre){
    divStreamers.innerHTML = '';
    const newStreamers = streamers.filter(busca = (streamer) =>{
       
        return nombre != '' && streamer.name.toLowerCase().includes(nombre.toLowerCase());

    });
    console.log(newStreamers)
    for(streamer of newStreamers){
        const elementoStreamer = document.createElement('p');
        elementoStreamer.textContent = streamer.name;
        divStreamers.appendChild(elementoStreamer);
    }
    }



input.addEventListener('input', e =>{
    findStreamers(input.value);
    });


