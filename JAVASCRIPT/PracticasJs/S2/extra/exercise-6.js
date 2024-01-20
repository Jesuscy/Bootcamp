/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.*/


const jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


swapArray = (array,pos1,pos2) =>{

    if(pos1 >= array.length || pos2 >= array.length || pos1 < 0 || pos2 < 0){
        console.log(`La posición indicada excede los límites de array.`);
    }
    else{
     //Guardo el valor de la pos1.
    const pos1Temp = array[pos1];
     //Sobreescribo pos2 en pos1.
     array[pos1] = array[pos2];
     //Sobreescribo pos2 con la variable en la que guardo pos1.
      array[pos2] = pos1Temp;
    }
  

}

swapArray(jugadores, 0, 6);
console.log(jugadores); 