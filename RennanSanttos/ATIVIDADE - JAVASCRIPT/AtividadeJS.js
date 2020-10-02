

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

function ContarNomeAtividade4() {
    var FormAtv4 = document.getElementById("FormularioAtiv4");
        var nomes4letras = 
                [form.prinome.value, 
                FormAtv4.segnome.value, 
                FormAtv4.tercnome.value, 
                FormAtv4.quartnome.value, 
                FormAtv4.quintnome.value, 
                FormAtv4.sextnome.value, 
                FormAtv4.setnome.value, 
                FormAtv4.oitnome.value, 
                FormAtv4.nononome.value, 
                FormAtv4.decnome.value];
                for (var i = 0; i <= nomes4letras.length; i++) 
                {
                    if (nomes4letras[i].length == 4) 
                    {
                    document.getElementById('resultAtv4').innerHTML = "O(s) Nome(s) com a(s) quatro letra(s) são: "+nomes4letras[i];
                    }
                }
            
        
    }


function ValidacaoDadosFormularioAtividade5() {
    var FormAtv5 = document.getElementById('FormularioAtiv5');
    if (FormAtv5.nome.value == "") {
        alert("Campo PRIMEIRO NOME em branco!.");
        return false;
    }

    if (FormAtv5.segundonome.value == "") {
        alert("Campo SEGUNDO NOME em branco!.");
        return false;
    }

    if (FormAtv5.datanasc.value == "") {
        alert("Campo DATA DE NASCIMENTO em branco!.");
        return false;
    }

    var escolhaSexo = -1;
    for(var i = FormAtv5.sexo.length - 1; i > -1; i--) {
        if(FormAtv5.sexo[i].checked) {
            escolhaSexo = i;
        }
    }
    if (escolhaSexo == -1) {
        alert("Campo SEXO em branco!!");
        return false;
    }

    if (FormAtv5.rua.value == "") {
        alert("Campo RUA em branco!.");
        return false;
    }

    if (FormAtv5.numero.value == "") {
        alert("Campo NUMERO em branco!.");
        return false;
    }

    if (FormAtv5.bairro.value == "") {
        alert("Campo BAIRRO em branco!.");
        return false;
    }

    if (FormAtv5.cidade.value == "") {
        alert("Campo CIDADE em branco! ");
        return false;
    }

    if (FormAtv5.estado.value == "") {
        alert("Campo CIDADE em branco!. ");
        return false;
    }
}

function ValidacaoDadosAtividade6() {
    var FormAtv6 = document.getElementById('FormularioAtiv6');

    if (FormAtv6.user.value == "") {
        alert("Digite o seu usuário.");
        return false;
    }

    if (FormAtv6.password1.value == "") {
        alert("Digite a sua senha.");
        return false;
    }

    if (FormAtv6.password2.value == "") {
        alert("Confirme a sua senha.");
        return false;
    }

    if (FormAtv6.password1.value != FormAtv6.password2.value) {
        alert("Desculpe, as senhas digitas são diferentes, tente novamente.");
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

