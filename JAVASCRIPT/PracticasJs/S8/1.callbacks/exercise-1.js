/*Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. 
La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).
La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.
Ejecuta varias veces la función father y haz finalmente un console.log de numbersList
*/
const numbersList = [];

function mostrarResultados(){
    const resultados = document.createElement('p');
    resultados.textContent = numbersList;
    document.body.appendChild(resultados);

}
function sum(a,b){
    return a + b;

}

function substract(a,b){
    return a - b;

}

function father(a,b,callback){
    numbersList.push(callback(a,b));

}  

father(1,2,sum);
father(6,5,substract);
console.log(numbersList);
mostrarResultados();


