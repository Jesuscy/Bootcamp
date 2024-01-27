/*Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento 
click que ejecute un console log con la información del evento del click */
const button = document.createElement('button');
button.id = 'btnToClick';
button.textContent = 'Clickame!'; 
document.body.appendChild(button);

button.addEventListener('click',e =>{
    console.log(`Evento Click: ${e}`);
})
