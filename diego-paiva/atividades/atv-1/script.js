const alvo = document.getElementById('alvo');

for (let index = 0; index <= 100; index++) {
    var impar = [];
    if (!(index % 2 == 0)) {
        impar.push(index)
        alvo.innerHTML += impar + " \n"
    }
}