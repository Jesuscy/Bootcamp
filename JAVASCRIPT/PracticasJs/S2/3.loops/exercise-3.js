/*Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.*/

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

//Recorro los lugares dentro del array.
for(place of placesToTravel){
    //Si la id coincide con 11 o 40.
    if(place.id === 11 || place.id === 40){
        //Obtengo el índice del elemento.
        const indice = placesToTravel.indexOf(place);
        //Quito un elemento con splice en el indice donde se encuentra.
        placesToTravel.splice(indice, 1);

    }
}
/* 
const newPlaces = placesToTravel.filter(place => place.id !== 11 || place.id !== 40);
No se porque no funciona, si al hacer placesToTravel.filter(place => place.id === 11 || place.id === 40); el resultado de newPlaces es Venecia y Santander.
*/



console.log(placesToTravel);