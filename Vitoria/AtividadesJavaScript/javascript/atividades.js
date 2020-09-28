function NumeroImpar() {
    var impares = [];
    for (var i = 0; i<= 100; i++) {
        if(i%2!=0){
            impares.push(i);
        }
    }
    document.getElementById('resultado1').innerHTML = impares;
}

function Soma1a100() {
    var soma = 0;
    for(var j = 1; j<=100; j++) {
        soma = j + soma;
    }
    document.getElementById('resultado2').innerHTML = "O resultado é "+soma;
}

function SomaMedia() {
    var form = document.getElementById("formulario1");
    numero1 = parseInt(form.numero1.value);
    numero2 = parseInt(form.numero2.value);
    numero3 = parseInt(form.numero3.value);
    numero4 = parseInt(form.numero4.value);
    var soma = numero1 + numero2 + numero3 + numero4;
    var media = soma / 4;
    document.getElementById('resultado3').innerHTML = "A soma dos números é "+soma+" e a média é "+media;
}

function ContarNome() {
    var form = document.getElementById("formulario2");
    var nomes = [form.nome1.value, form.nome2.value, form.nome3.value, form.nome4.value, form.nome5.value, form.nome6.value, form.nome7.value, form.nome8.value, form.nome9.value, form.nome10.value];
    for (var i = 0; i <= nomes.length; i++) {
        if (nomes[i].length == 4) {
            alert("Este nome tem 4 letras: "+nomes[i]);
        }
    }
}

function ValidaForm() {
    var form = document.getElementById('formulario3');
    if (form.nome.value == "") {
        alert("Insira seu primeiro nome!");
        return false;
    }

    if (form.nome2.value == "") {
        alert("Insira seu segundo nome!");
        return false;
    }

    if (form.data.value == "") {
        alert("Insira sua data de nascimento!");
        return false;
    }

    var escolhaSexo = -1;
    for(var i = form.sexo.length - 1; i > -1; i--) {
        if(form.sexo[i].checked) {
            escolhaSexo = i;
        }
    }
    if (escolhaSexo == -1) {
        alert("Selecione o seu sexo!");
        return false;
    }

    if (form.rua.value == "") {
        alert("Insira sua rua!");
        return false;
    }

    if (form.numero.value == "") {
        alert("Insira seu número!");
        return false;
    }

    if (form.bairro.value == "") {
        alert("Insira seu bairro!");
        return false;
    }

    if (form.cidade.value == "") {
        alert("Insira sua cidade!");
        return false;
    }

    if (form.estado.value == "") {
        alert("Insira seu estado!");
        return false;
    }
}

function ValidaForm4() {
    var form = document.getElementById('formulario4');

    if (form.usuario.value == "") {
        alert("Insira seu usuário!");
        return false;
    }

    if (form.senha.value == "") {
        alert("Insira sua senha!");
        return false;
    }

    if (form.senha2.value == "") {
        alert("Confirme sua senha");
        return false;
    }

    if (form.senha.value != form.senha2.value) {
        alert("As senhas não são iguais! Tente novamente.");
        return false;
    }
}

function ValidaForm5() {
    var form = document.getElementById('formulario5');

    if(form.email.value.indexOf("@") == -1 || form.email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    }
    
    if(form.cpf.value == "") {
        alert("Insira seu CPF!");
        return false;
    }
}

document.getElementById('valor').focus();

function exemplo1() {
    var valor = document.getElementById('valor').value;
    document.getElementById('valor2').innerHTML = valor;
}

function mouseOver() {
    document.getElementById("mouseAlt").innerHTML = "Retire o mouse";
}

function mouseOut() {
    document.getElementById("mouseAlt").innerHTML = "Passe o mouse de novo";
}

function checarCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies estão funcionando.";
    } else {
       text = "Cookies não estão funcionando.";
    }
    document.getElementById("exemplo3").innerHTML = text;
  }