function validacao(){
    var formulario = document.forms["forcontato"]
    var nome= formulario.nome.value
    var email= formulario.email.value
    var telefone= formulario.telefone.value
    var datanasc= formulario.datanasc.value
    var bairro =formulario.bairro.value
    var rua=formulario.rua.value
    var numero=formulario.numero.value
    var cidade=formulario.cidade.value
    var mensagem=formulario.mensagem.value

    var erro=false // não tem erro

    if(formulario=""){
        alert("Preencha o nome completo")
        erro = true // quando identifica um erro
    }

    if(nome==""){
        alert("Preencha o nome completo")
        erro = true // quando identifica um erro

    }

    if(email==""){
        alert("Preencha o email")
        erro = true // quando identifica um erro

    }

    if(telefone==""){
        alert("Preencha seu telefone")
        erro = true // quando identifica um erro

    }
    if(datanasc==""){
        alert("Preencha sua data de nascimento")
        erro = true // quando identifica um erro
    }

    if(bairro==""){
        alert("Preencha seu bairro")
        erro = true // quando identifica um erro

    }
    if(rua==""){
        alert("Preencha sua rua")
        erro = true // quando identifica um erro

    }
    if(numero==""){
        alert("Preencha seu numero corretamente ")
        erro = true // quando identifica um erro

    }
    if(cidade==""){
        alert("Preencha sua cidade ")
        erro = true // quando identifica um erro

    }
   
    if(mensagem==""){
        alert("Escreva sua mensagem! ")
        erro = true // quando identifica um erro

    }


    if(erro){
        return false
    } else{
        alert("Seus dados foram enviados. Entraremos em contato! ")
        return true
        
    }


}