const calc = document.querySelector('.calc');
const clear = document.querySelector('.clear');

calc.addEventListener("click", () => {
  var soma = 0;
  let resut = document.querySelector(".resut");
  
  for (n = 1; n <= 100; n++){
    soma = soma + n;
  }

  resut.innerHTML = `O resultado é: ${soma}`;  
})

clear.addEventListener('click', () => {
  let resut = document.querySelector(".resut");
  resut.innerHTML = `O resultado é:`;  
})