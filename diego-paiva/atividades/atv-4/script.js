const alvo = document.getElementById('alvo');

function formSubmit() {
    const listaNomes = document.querySelectorAll('input');
    var array = []
    listaNomes.forEach(input => {
        array.push(input.value);
    });
    array.forEach(nome => {
        if (nome.length <= 4) {
            alvo.innerHTML += nome + "\n"
        }
    });
}