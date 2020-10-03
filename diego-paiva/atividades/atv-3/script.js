const alvo = document.getElementById('alvo');
const inputs = document.getElementsByTagName('input');

var soma = 0;
var media = 0;

function mediaCalc() {
    soma = parseInt(inputs.num1.value) + parseInt(inputs.num2.value) + parseInt(inputs.num3.value) + parseInt(inputs.num4.value);
    media = soma / 4;
    alvo.innerHTML = `Média = ${media}\nSoma = ${soma}`
}

