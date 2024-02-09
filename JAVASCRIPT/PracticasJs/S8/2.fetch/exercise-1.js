/*
Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve.
Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.
*/
fetch('https://api.agify.io?name=michael')
    .then((data) => { // Cuando esté bien
        console.log('He terminado, aquí está la data:', data);
    })
    .catch((error) => { // Cuando esté mal
        console.log('Ha habido un error', error);
    })
    .finally(() => { // Siempre
        console.log('He finalizado la promesa');
    });