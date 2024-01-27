/*Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.
 */
const input = document.getElementsByTagName('input')[0]
input.addEventListener('focus',e => {
    console.log('hola');
});

