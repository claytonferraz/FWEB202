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
    
}