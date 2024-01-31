//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.


const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

users.map(returnUser = (user) =>{
    const nombre = user.name; 
    const primeraLetra = nombre.split('').slice(0,1);
    if(primeraLetra[0].toLowerCase() === 'a'){
        user.name = 'Anacleto';
    }
    console.log(user);
});
