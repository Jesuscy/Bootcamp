/*Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div.
 Recuerda que no solo puedes insertar elementos con .appendChild.*/

const div = document.getElementsByTagName('div');
const newP = document.createElement('p');
console.log(div);
newP.textContent = 'Voy en medio!'
document.body.insertBefore(newP,div[1]);