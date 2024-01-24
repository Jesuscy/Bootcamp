/*
En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores.
Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

*/

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
//Destructuring del objeto.
const {name,itv} = car;
//Destructuring del array itv.
const [fecha1,fecha2,fecha3] = itv;

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);