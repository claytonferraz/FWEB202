const alvo = document.getElementById('alvo');
var soma = 0;
for (let index = 0; index <= 100; index++) {
    soma += index;
}
alvo.innerHTML = soma;