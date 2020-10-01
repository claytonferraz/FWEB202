const calc = document.querySelector('.calc');
const clear = document.querySelector('.clear');

let result = document.querySelector(".resut");

let dados = document.querySelector('.dados')
nomes = [];
for (n = 1; n <=10; n++){
  let nom = `<input class="nomes" placeholder="${n}ª - Insira apenas o primeiro nome."> </input> <br/>`;
  nomes.push(nom)
}
for(n=0; n <10; n++) {
  no = nomes[n];
  dados.innerHTML = dados.innerHTML + no;
}

let nomesADD = document.querySelectorAll('.nomes');
let nomesArray = [];
let nomes4 = [];
calc.addEventListener("click", () => {
  for(n = 0; n < 10; n++)
  {
    let dad = (nomesADD[n].value);
    if((dad.length) === 4) 
    {
      nomes4.push(dad);
    }
    nomesArray.push(dad);
  }

  result.innerHTML = nomes;

})

clear.addEventListener('click', () => {
  let resultado = document.querySelector(".resut");
  resultado.innerHTML = `Nomes que possui quatro letras:`;  
})
