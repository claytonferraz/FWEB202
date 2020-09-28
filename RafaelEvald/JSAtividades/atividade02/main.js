const calc = document.querySelector('.calcular');
const limpar = document.querySelector('.limpar');

calc.addEventListener("click", () => {
  let resultado = document.querySelector(".resut");
  let num = 0;
  for (n = 1; n <= 100; n++){
    num = num + n;
  }
  console.log(num)
  resultado.innerHTML = `O resultado é: ${num}`;  
})

limpar.addEventListener('click', () => {
  let resultado = document.querySelector(".resut");
  resultado.innerHTML = `O resultado é: ??? `;  
})