const cadast = document.querySelector('.cadastrar');
const limpar = document.querySelector('.limpar');


cadast.addEventListener('click', () => {
  let primNome = document.querySelector('.dadPriNome').value;
  let segNome = document.querySelector('.dadSegNome').value;
  let nascimento = document.querySelector('.nascimento').value;
  let estado = document.querySelector('.estado').value;
  let city = document.querySelector('.city').value;
  let bairro = document.querySelector('.bairro').value;
  let rua = document.querySelector('.rua').value;
  let numero = document.querySelector('.numero').value;

  if((primNome.length) === 0){
    const teste = document.getElementById('alertNomePr')
    teste.className = 'ativ';
  }

  if((segNome.length) === 0){
    const test = document.getElementById('alertNomeSeg')
    test.className = 'ati';
  }
  if((nascimento.length) === 0){
    const test = document.getElementById('alertNascimento')
    test.className = 'ati';
  }
  if((estado.length) === 0){
    const test = document.getElementById('alertEstad')
    test.className = 'ati';
  }
  if((city.length) === 0){
    const test = document.getElementById('alertCity')
    test.className = 'ati';
  }
  if((bairro.length) === 0){
    const test = document.getElementById('alertBairro')
    test.className = 'ati';
  }
  if((rua.length) === 0){
    const test = document.getElementById('alertRua')
    test.className = 'ati';
  }
  if((rua.length) === 0){
    const test = document.getElementById('alertNum')
    test.className = 'ati';
  }

});


limpar.addEventListener('click', () => {
  let resultado = document.querySelector(".resut");
  resultado.innerHTML = `Pessoas com nome que possuia quatro letras: ???`;  
})
