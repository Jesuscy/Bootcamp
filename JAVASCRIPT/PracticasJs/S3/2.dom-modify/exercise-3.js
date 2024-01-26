for (let i = 0; i <= 6; i++) {
    let newDiv = document.createElement('div');
    let newP = document.createElement('p');
    newP.textContent = 'Hola';
    document.body.appendChild(newDiv);
    newDiv.appendChild(newP);
}
