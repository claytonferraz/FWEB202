

function NumeroImpares1a100Atividade1() {
    var numerosImpares = [ ];
    for (var i = 0; i<= 100; i++) 
    {
        if(i % 2!= 0)
        {
            numerosImpares.push(i);
        }
    }
    
    document.getElementById("resulAtv01").innerHTML ="Os numeros Impares de 1 a 100 são: "
    +numerosImpares;
}

function Somanumeros1a100Atividade2() {
    var somanum = 0;
    for(var j = 1; j<=100; j++) {
        somanum = j + somanum;
    }
    document.getElementById('resultAtv2').innerHTML = "A Soma dos numero de 1 a 100 é: "+somanum;
}

function SomarMedia4numerosAtividade3() {
    var somamedia = document.getElementById("FormulárioAtiv3");
    num1 = parseInt(somamedia.num1.value);
    num2 = parseInt(somamedia.num2.value);
    num3 = parseInt(somamedia.num3.value);
    num4 = parseInt(somamedia.num4.value);
    var somar= num1 + num2 + num3 + num4;
    var media = somar / 4;
    document.getElementById('resultAtv3').innerHTML = "A soma dos quatros números é: "+somar+" e a média deles é: "+media;
}

function ContarNomeAtividade4() 
{
    var form = document.getElementById("FormularioAtiv4");
    var nomes = [form.nome1.value, 
        form.nome2.value, 
        form.nome3.value, 
        form.nome4.value, 
        form.nome5.value, 
        form.nome6.value, 
        form.nome7.value, 
        form.nome8.value, 
        form.nome9.value, 
        form.nome10.value];
    for (var i = 0; i <= nomes.length; i++) 
    {
        if (nomes[i].length == 4) 
        {
            alert("O(s) Nome(s) com a(s) quatro letra(s) são: "+nomes[i]);
        }
    }
}

function ValidacaoDadosFormularioAtividade5() {
    var form = document.getElementById('FormularioAtiv5');
    if (form.nome.value == "") 
    {
        alert("Campo PRIMEIRO NOME em branco!.");
        return false;
    }

    if (form.nome2.value == "") 
    {
        alert("Campo SEGUNDO NOME em branco!.");
        return false;
    }

    if (form.data.value == "") 
    {
        alert("Campo DATA DE NASCIMENTO em branco!.");
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
        alert("Campo SEXO em branco!!");
        return false;
    }

    if (form.rua.value == "") 
    {
        alert("Campo RUA em branco!.");
        return false;
    }

    if (form.numero.value == "") 
    {
        alert("Campo NUMERO em branco!.");
        return false;
    }

    if (form.bairro.value == "") 
    {
        alert("Campo BAIRRO em branco!.");
        return false;
    }

    if (form.cidade.value == "") 
    {
        alert("Campo CIDADE em branco! ");
        return false;
    }

    if (form.estado.value == "") 
    {
        alert("Campo ESTADO em branco!. ");
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
        alert("O campo de confirmação deve ser preenchido");
        return false;
    }

    if (form.senha.value != form.senha2.value) 
    {
        alert("As senhas não são iguais");
        return false;
    }
}

function ValidaCPFeEmailAtividade7() {
    var FormAtv7 = document.getElementById('FormularioAtiv7');

    if(FormAtv7.email.value.indexOf("@") == -1 || FormAtv7.email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    }
    
    if(FormAtv7.cpf.value == "") {
        alert("Insira seu CPF!");
        return false;
    }
}

document.getElementById('valor').focus();


/*function ExemploOnLoad()
{
    alert("A Pagina foi carregada.")
}

function onMouseDown() 
{
    document.getElementById("MyP").style.color = "Pink";
}

function mouseUP() 
{
    document.getElementById("MyP").innerHTML = "red";
}

function onFocus(x)
{
    x.style.background = " Blue"
}

function OnChange()
 {
    var x = document.getElementById('A').value;
    document.getElementById('B').innerHTML = "Você Selecionou: "+x;
}*/

function OnKeyPress()
{
    alert("Você pressionou uma tecla dentro do campo de Entrada" );
}

function Onclick(){
    document.getElementById("demo").innerHTML = x;
}

