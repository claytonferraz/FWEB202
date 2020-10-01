const calc = document.querySelector('.cal');
const clear = document.querySelector('.clear');

calc.addEventListener("click", () => {
  var nImpar = [];
  let num = document.querySelector(".result");
  
  for (n = 1; n <= 100; n++){
    if((n % 2) === 1) {
      nImpar.push(n);
      console.log(n)
    }
  }

  num.innerHTML = `O resultado é: ${nImpar}`;  
})

clear.addEventListener('click', () => {
  let num = document.querySelector(".result");
  num.innerHTML = `O resultado é:`;  
})