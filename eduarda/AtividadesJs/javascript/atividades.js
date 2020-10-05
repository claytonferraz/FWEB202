function Numerosimpares(){

    var cont= [];
    var impar=[];
     for(cont=1; cont <= 100; cont++){
         if((cont%2)!= 0){
             impar.push(cont);
         }
     }

     document.getElementById("atividade1").innerHTML=impar;
}

function Numerosoma(){

    var soma=0;

     for(var cont=1; cont <= 100; cont++){
         soma = soma + cont;  
     }

     document.getElementById("atividade2").innerHTML=soma;
}

function Somaemedia(){
    var form, soma, media;
     form=document.getElementById("form");

    num1= parseInt(form.num1.value);
    num2= parseInt(form.num2.value);
    num3= parseInt(form.num3.value);
    num4= parseInt(form.num4.value);

    soma= num1+num2+num3+num4;
    media= soma/4;

    document.getElementById("atividade3").innerHTML= "soma= " + soma + " e a media="+ media;

}