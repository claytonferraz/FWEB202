function Exercicio1() 
{
    var impares = [];
    for (var i = 0; i<= 100; i++) 
    {
        if(i%2!=0)
        {
            impares.push(i);
        }
    }
    document.getElementById('resultado1').innerHTML = impares;
}

function Exercicio2() 
{
    var soma = 0;
    for(var j = 1; j<=100; j++) 
    {
        soma = j + soma;
    }
    document.getElementById('resultado2').innerHTML = "Total: "+soma;
}

function Exercicio3() 
{
    var form  = document.getElementById("formulario1");
    primeiro  = parseInt(form.primeiro.value);
    segundo   = parseInt(form.segundo.value);
    terceiro  = parseInt(form.terceiro.value);
    quarto    = parseInt(form.quarto.value);
    var soma  = primeiro + segundo + terceiro + quarto;
    var media = soma / 4;
    document.getElementById('resultado3').innerHTML = "Soma: "+soma+"<br>Média: "+media;
}

function Exercicio4() 
{
    var form = document.getElementById("formulario2");
    var nomes = [form.nome1.value, form.nome2.value, form.nome3.value, form.nome4.value, form.nome5.value, form.nome6.value, form.nome7.value, form.nome8.value, form.nome9.value, form.nome10.value];
    for (var i = 0; i <= nomes.length; i++) 
    {
        if (nomes[i].length == 4) 
        {
            alert("Nome com 4 letras: "+nomes[i]);
        }
    }
}

function Exercicio5() {
    var form = document.getElementById('formulario3');
    if (form.nome.value == "") 
    {
        alert("Insira seu nome!");
        return false;
    }

    if (form.nome2.value == "") 
    {
        alert("Insira seu sobrenome!");
        return false;
    }

    if (form.data.value == "") 
    {
        alert("Insira uma data de nascimento!");
        return false;
    }

    var escolhaSexo = -1;
    for(var i = form.sexo.length - 1; i > -1; i--) {
        if(form.sexo[i].checked) 
        {
            escolhaSexo = i;
        }
    }
    if (escolhaSexo == -1) 
    {
        alert("Selecione um sexo!");
        return false;
    }

    if (form.rua.value == "") 
    {
        alert("Insira a rua!");
        return false;
    }

    if (form.numero.value == "") 
    {
        alert("Insira um número!");
        return false;
    }

    if (form.bairro.value == "") 
    {
        alert("Insira um bairro!");
        return false;
    }

    if (form.cidade.value == "") 
    {
        alert("Insira uma cidade!");
        return false;
    }

    if (form.estado.value == "") 
    {
        alert("Insira um estado!");
        return false;
    }
}

function Exercicio6() 
{
    var form = document.getElementById('formulario4');

    if (form.usuario.value == "") 
    {
        alert("O campo usuário deve ser preenchido!");
        return false;
    }

    if (form.senha.value == "") 
    {
        alert("Você precisa inserir uma senha!");
        return false;
    }

    if (form.senha2.value == "") 
    {
        alert("O campor de confirmação deve ser preenchido");
        return false;
    }

    if (form.senha.value != form.senha2.value) 
    {
        alert("As senhas não são iguais");
        return false;
    }
}

function Exercicio7() 
{
    var form = document.getElementById('formulario5');

    if(form.email.value.indexOf("@") == -1 || form.email.value.indexOf(".") == -1) 
    {
        alert("Você não inserriu um email válido");
        return false;
    }
    
    if(form.cpf.value == "") 
    {
        alert("Informe um CPF");
        return false;
    }
}

document.getElementById('valor').focus();

function Exercicio8() 
{
    var valor = document.getElementById('valor').value;
    document.getElementById('valor2').innerHTML = valor;
}

function mouseOver() 
{
    document.getElementById("mouseAlt").innerHTML = "Cai fora daqui zé";
}

function mouseOut() 
{
    document.getElementById("mouseAlt").innerHTML = "Ei mouse, venha aqui";
}

function checarCookies() 
{
    var text = "";
    if (navigator.cookieEnabled == true) 
    {
      text = "Cookies Funcionando";
    } else 
    {
       text = "Cookies com Erros.";
    }
    document.getElementById("exemplo3").innerHTML = text;
  }