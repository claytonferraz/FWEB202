const calc = document.querySelector('.calcular');
const limpar = document.querySelector('.limpar');

calc.addEventListener("click", () => {
  let resultado = document.querySelector(".resut");

  let n1 = parseInt(document.querySelector(".num1").value);
  let n2 = parseInt(document.querySelector(".num2").value);
  let n3 = parseInt(document.querySelector(".num3").value);
  let n4 = parseInt(document.querySelector(".num4").value);

  let soma = (n1 + n2 + n3 + n4);
  let media = soma / 2;

  resultado.innerHTML = `A soma dos numeros são: ${soma}, E sua média é: ${media}.`;  
})

limpar.addEventListener('click', () => {
  let resultado = document.querySelector(".resut");
  resultado.innerHTML = `A soma dos numeros são: ???, E sua média é: ???`;  
})