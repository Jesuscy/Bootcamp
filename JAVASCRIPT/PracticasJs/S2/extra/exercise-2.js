/*
Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript.
*/

const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

//Array en el que guardo todos los tonos.
const tonos = [];
//Array en el que guardo los tonos favoritos.
const tonosFavoritos = [];

//Recorro usuarios, y los tonos favoritos de cada usuario y lo añado tonos.
for (const user of users) {
    for (const sounds in user.favoritesSounds) {
        tonos.push(sounds);
    }
}

//Recorro el array de tonos.
for (let i = 0; i < tonos.length; i++) {
    //Obtengo las repeticiones de cada tono.
    const repeticiones = tonos.reduce((contador, elemento) => {elemento === tonos[i] ? contador + 1 : contador}, 0);
    //Obtengo el nombre del tono que se repite.
    var nombreTono = tonos[i];
    //Creo el objeto con la estructura {nombreTono:repeticiones}.
    const tonoFav = {};
    tonoFav[nombreTono] = repeticiones;
    //Busco dentro de tonosFavoritos si hay algun objeto con el valor de su clave[0] igual a la clave[0] de tonoFav que es nombreTono. 
    const existeEnTonosFavoritos = tonosFavoritos.some(objeto => {Object.keys(objeto)[0] === nombreTono});
    //Si no existe lo añado al array de favoritos.
    if (!existeEnTonosFavoritos) {
        tonosFavoritos.push(tonoFav);
    }
}

console.log(tonosFavoritos)
