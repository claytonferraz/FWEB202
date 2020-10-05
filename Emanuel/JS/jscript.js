function impares(){
    var resultado = document.getElementById('impares')
    resultado.innerText='a seguencia de numeros é: ';
    for (var num = 0; num < 100; num++) {
        if(num%2!=0)
        resultado.innerText=(`${resultado.innerText}-${num}`)
    }

}
function soma100(){
    var resultado = document.getElementById('soma100')
    resultado.innerText='a soma de todos os numeros de 1 a 100 é: ';
    var result=0;
    for(var num = 0; num<101; num++){
        result=result+num;
    }
    resultado.innerText=(`${resultado.innerText}-${result}`)
}
function Media1(n1,n2,n3,n4){
    var resultado = document.getElementById('media1')
    var soma = n1+n2+n3+n4;
    var media = soma/4;
    resultado.innerText=(`${resultado.innerText}-${media}`)

}

