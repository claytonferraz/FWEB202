const alvo = document.getElementById('alvo');
var form = document.getElementsByTagName('input');

const erro = document.getElementById('erro');

function validateForm() {

    for (let index = 0; index < form.length; index++) {
        if (form[index].value === '') {
            erro.innerHTML = form[index].id + " não pode estar vazio!"
            return false;
        }
    }

    if (form.passwd.value == form.sPasswd.value) {
        erro.style.color = "green"
        erro.innerHTML = 'Cadastro realizado com sucesso';
    } else {
        erro.style.color = "red";
        erro.innerHTML = "Senhas precisam ser iguais"
    }
    return true;
}