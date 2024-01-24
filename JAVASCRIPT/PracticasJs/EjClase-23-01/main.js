function calculate() {
    const numero1 = document.getElementsByName('number1')[0].value;
    const numero2 = document.getElementsByName('number2')[0].value;
    const suma = parseInt(numero1) + parseInt(numero2);
    console.log(suma);
    alert(`El resultado de la operacion es :${suma}`);
}