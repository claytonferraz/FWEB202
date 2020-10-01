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
    console.log(form)
    if (!TestaCPF(form.cpf.value)) {
        erro.style.color = "red";
        erro.innerHTML = "CPF Invalido"
        return false;
    }
    if (!validacaoEmail(form.email.value)) {
        erro.style.color = "red";
        erro.innerHTML = "Email Invalido"
        return false;
    }

    return true;

}


function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
function validacaoEmail(email) {
    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@") + 1, email.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
    }
    else {
        return false
    }
}