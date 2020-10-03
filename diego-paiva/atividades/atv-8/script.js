const move = document.getElementById('mouse-move')
const over = document.getElementById('mouse-over')
const focused = document.getElementById('focused')
const focusText = document.getElementById('focus-text')
const wheel = document.getElementById('wheel')
const down = document.getElementById('key-down')
const detecttext = document.getElementById('detect-text')



window.onmouseover = function (e) {
    move.innerHTML = `O mouse esta se movendo X: ${e.screenX} Y: ${e.screenY}`
}

over.addEventListener('mouseover', e => {
    over.innerHTML = `O mouse entrou na div X: ${e.screenX} Y: ${e.screenY}`
});
focused.addEventListener('focus', e => {
    focusText.innerHTML += "Texto foi SELECIONADO";
});

window.onscroll = function scroll(e) {
    wheel.innerHTML = `O scroll foi utilizado`
}
down.addEventListener('keydown', e => {
    detecttext.innerHTML += e.code;
});
