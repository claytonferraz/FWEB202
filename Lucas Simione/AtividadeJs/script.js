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