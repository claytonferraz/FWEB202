const cadast = document.querySelector('.cadastrar');
const limpar = document.querySelector('.limpar');



cadast.addEventListener('click', () => {
  let primNome = document.querySelector('.dadPriNome').value;
  let segNome = document.querySelector('.dadSegNome').value;
  let nascimento = document.querySelector('.nascimento').value;
  let sex = document.querySelector('.sex').value;

  if((primNome.length) === 0){
    const teste = document.getElementById('alertNomePr')
    teste.className = 'ativ';
  }
  if((segNome.length) === 0){
    const test = document.getElementById('alertNomeSeg')
    test.className = 'ati';
  }


  console.log(primNome.length)
  console.log(segNome)
  console.log(nascimento)
  console.log(sex)


});


limpar.addEventListener('click', () => {
  let resultado = document.querySelector(".resut");
  resultado.innerHTML = `Pessoas com nome que possuia quatro letras: ???`;  
})
