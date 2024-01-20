/*Usa un foin para imprimir por consola los datos del alienigena.*/
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(prop in alien){
    console.log(prop, alien[prop]);
}

