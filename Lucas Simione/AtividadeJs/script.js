function NumerosImpares1a100(){
    var result = document.getElementById('impares1a100')
    result.innerText = 'Resultado:';
    for(var i = 1; i <= 100; i++){
        if(i % 2 != 0){
            result.innerText = (`${result.innerText} - ${i}`);
        }
    }
}

function Somar1a100(){
    var result = document.getElementById('soma1a100')
    var soma = 0;
    result.innerText = 'Resultado:';
    for(var i = 1; i <= 100; i++){
        soma += i;
    }
    result.innerText = (`${result.innerText} ${soma}`);
}

function SomaEMedia(){
    var num1 = document.querySelector('input#n1')
    var num2 = document.querySelector('input#n2')
    var num3 = document.querySelector('input#n3')
    var num4 = document.querySelector('input#n4')
    var resultSoma = document.querySelector('input#soma')
    var resultMedia = document.querySelector('input#media')
    var n1 = Number.parseInt(num1.value)
    var n2 = Number.parseInt(num2.value)
    var n3 = Number.parseInt(num3.value)
    var n4 = Number.parseInt(num4.value)
    var soma = n1+n2+n3+n4
    var media = soma/4
    resultSoma.value = soma
    resultMedia.value = media 
}

function Nomes4Letras(){
    var nomes = document.getElementsByName('nome')
    var result, resultado = document.getElementById('resultado')
    for(var i = 0; i < 10; i++){
        var nome = nomes[i].value
        if(nome.length == 4)
            result = `${result} - ${nome}`
    }
    resultado.innerText = `Resultado: ${result}`
}

function Cadastrar(){
    var form = document.forms['cadastro']
    var sexo = form.sexo.value

    if(form.primeironome.value.trim().length == 0){
        alert('Informe seu primeiro nome')
    }
    if(form.segundonome.value.trim().length == 0) {
        alert('Informe seu segundo nome')
    }
    if(form.datanasc.value.trim().length == 0) {
        alert('Informe sua data de nascimento')
    }
    
}

function ValidarSenha(){
    var senha = document.querySelector('input#senha')
    var confirmacaosenha = document.querySelector('input#confirmacaosenha')

    if(senha.value.trim() != confirmacaosenha.value.trim()){
        alert('Dados incorretos! senhas não conferem.')
    }
}

function ValidarCpf(){
    var cpf = document.querySelector('input#cpf').value
    var inicioCpf = cpf.substr(0,9)
    var finalCpf = cpf.substr(9,)
    var val1 = 0, decresce = 10, val2 = 0, val3 = 0, val4 = 0

    for(var i = 0; i < 10; i++){
        var numcpf = inicioCpf.substr(i,1)
        val1 += (Number(numcpf)) * decresce
        decresce -= 1
    }
    val2 = val1 * 10 % 11
    decresce = 11
    inicioCpf = cpf.substr(0,10)
    
    if(val2 == finalCpf.substr(0,1)){   
        for(var i = 0; i < 11; i++){
            var numcpf = inicioCpf.substr(i,1)
            val3 += (Number(numcpf)) * decresce
            decresce -= 1
        }
        var val4 = val3 * 10 % 11
        val5 = Number(finalCpf.substr(1,1))
        
        if((val4 != val5)){
            alert('Cpf Inválido!')
        }       
    }else{
        alert('Cpf inválido!')
    }
}