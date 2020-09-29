$(document).ready(function () {
    $('a[Apagar]').click(function (ev) {
        var href = $(this).attr('href');
        if (!$('#confirma-delete').length) {
            $('body').append('<div class= "modal fade" id ="confirma-delete" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel bg-danger text-white">CONFIRMAÇÃO DE EXCLUSÃO</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">Tem certeza que deseja excluir o item selecionado?</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><a class="btn btn-danger text-white" id="dataConfirmOK">Apagar</a></div></div></div></div>')
        };
        $('#dataConfirmOK').attr('href', href);
        $('#confirma-delete').modal({ shown: true });
        return false;
    });   
    
});
    
    
