//Confirma antes de deletar
$('.Apagar').on('click', function (event)){
    event.preventDefault();
    var Link = $(this).attr('href');
    if (confirm("Deseja realmente apagar esse ítem?")) {
        window.location.href = Link;
    } else {
        return false;
    }
}