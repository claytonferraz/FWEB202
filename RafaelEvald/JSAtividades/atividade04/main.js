const calc = document.querySelector('.calcular');
const limpar = document.querySelector('.limpar');

let resultado = document.querySelector(".resut");

//Geração dos inputs com JS
let dados = document.querySelector('.entrada-dados')
nomes = [];
for (n = 1; n <=10; n++){
  let nom = `<input class="nomes" placeholder="${n}ª - Insira apenas o primeiro nome."> </input> <br/>`;
  nomes.push(nom)
}
for(n=0; n <10; n++) {
  no = nomes[n];
  dados.innerHTML = dados.innerHTML + no;
}

//Pegando os nomes digitados e colocando no array, array com nomes com 4 letrass
let nomesInseridos = document.querySelectorAll('.nomes');
let nomesArray = [];
let nomes4letras = [];
calc.addEventListener("click", () => {
  for(n = 0; n < 10; n++){
    let dad = (nomesInseridos[n].value);
    if((dad.length) === 4) {
      nomes4letras.push(dad);
    }
    nomesArray.push(dad);
  }

  resultado.innerHTML = nomes4letras;

})

limpar.addEventListener('click', () => {
  let resultado = document.querySelector(".resut");
  resultado.innerHTML = `Pessoas com nome que possuia quatro letras: ???`;  
})
