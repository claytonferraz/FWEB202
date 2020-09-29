const calc = document.querySelector('.calcular');
const limpar = document.querySelector('.limpar');

calc.addEventListener("click", () => {
  var nImpar = [];
  let num = document.querySelector(".resut");
  
  for (n = 1; n <= 100; n++){
    if((n % 2) === 1) {
      nImpar.push(n);
      console.log(n)
    }
  }

  num.innerHTML = `O resultado é: ${nImpar}`;  
})

limpar.addEventListener('click', () => {
  let num = document.querySelector(".resut");
  num.innerHTML = `O resultado é: ??? `;  
})