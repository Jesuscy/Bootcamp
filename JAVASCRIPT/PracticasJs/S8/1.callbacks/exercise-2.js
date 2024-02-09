/*
Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. 
La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm.
La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).
La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.
Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers


// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');

*/
const userAnwsers = [];

function mostrarResultados(){
    const resultados = document.createElement('p');
    resultados.textContent = userAnwsers;
    document.body.appendChild(resultados);

}
function confirmExample(texto){
    return confirm(texto);
}

function promptExample(texto){
    return prompt(texto);
}

function father(texto,callback){
    userAnwsers.push(callback(texto));
}

father('Cual es tu nombre',promptExample);
father('Seguro?', confirmExample);
 mostrarResultados();