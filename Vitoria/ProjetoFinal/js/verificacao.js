function validaForm() {
    var form = document.getElementById("formulario");

    if(form.email.value.indexOf("@") == -1 || form.email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    }
    
    if (form.nome.value == "") {
        alert("Insira seu nome!");
        return false;
    }

    if (form.sobrenome.value == "") {
        alert("Insira seu sobrenome!");
        return false;
    }

    if (form.telefone.value == "") {
        alert("Insira seu telefone!");
        return false;
    }

    if (form.cidade.value == "") {
        alert("Insira sua cidade!");
        return false;
    }

    if (form.estado.value == "") {
        alert("Insira seu estado!");
        return false;
    }

    if (form.pergunta.value == "") {
        alert("Insira sua pergunta!");
        return false;
    }

    if (form.avaliacao.value == "") {
        alert("Insira sua avaliação do nosso blog!");
        return false;
    }

    if (form.recomendacao.value == "") {
        alert("Insira sua indicação de livro!");
        return false;
    }

    if (form.convite.value == "") {
        alert("Insira seu blog!");
        return false;
    }
}