const alvo = document.getElementById('alvo');
var form = document.querySelectorAll('input');
const select = document.querySelectorAll('select');
const erro = document.getElementById('erro');

function validateForm() {
    form.forEach(item => {
        if (item.value == '') {
            erro.innerHTML = item.id + " não pode estar vazio!"
            return false;
        }
        erro.style.color = "green"
        erro.innerHTML = 'Cadastro realizado com sucesso';
        return true;
    });
}