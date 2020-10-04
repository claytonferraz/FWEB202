function NumeroImparesAtv01() {
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

function SomanumerosAtv02() {
    var somanum = 0;
    for(var j = 1; j<=100; j++) {
        somanum = j + somanum;
    }
    document.getElementById('resultAtv2').innerHTML = "A Soma dos numero de 1 a 100 é: "+somanum;
}

function SomarMedia4numAtv03() {
    var somamedia = document.getElementById("form01");
    num1 = parseInt(somamedia.num1.value);
    num2 = parseInt(somamedia.num2.value);
    num3 = parseInt(somamedia.num3.value);
    num4 = parseInt(somamedia.num4.value);
    var somar= num1 + num2 + num3 + num4;
    var media = somar / 4;
    document.getElementById('resultAtv3').innerHTML = "A soma dos quatros números é: "+somar+" e a média deles é: "+media;
}

function ContarNomeAtv04() {
    var FormAtv4 = document.getElementById("form02");
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