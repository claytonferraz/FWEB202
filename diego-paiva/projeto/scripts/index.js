function setPortfolioData() {
    const portfolioData = [
        {
            title: "Diego Paiva",
            img: "./img/layout-diego-paiva.jpeg",
            href: "https://diegopaiva.dev.br"
        },
        {
            title: "William Melo Design",
            img: "./img/layout-william-melo.png",
            href: "https://williammelodesign.com.br"
        },
    ]
    let target = document.getElementById('portfolio-target');
    portfolioData.forEach(item => {
        let template = `
        <div class="portfolio-item" style="background-image:url('${item.img}');" onclick="window.location.href='${item.href}'">
            <h6 style="margin:0px 0 0 0;padding:0;font-size:1.4rem;">${item.title}</h6>
        </div >
        `;
        target.innerHTML += template
    });
}
function setDateCopyright() {
    let date = document.getElementById("date")
    date.innerHTML = new Date().getFullYear();
}

function validateForm() {
    const form = document.getElementsByClassName("iClass");
    const error = document.getElementById('error');
    if ("" == form.name.value) {
        error.innerHTML = "Por favor, preencha o campo Nome"
        return false;
    }
    if ("" == form.number.value) {
        error.innerHTML = "Por favor, preencha o campo Celular"
        return false;
    }
    if ("" == form.email.value) {
        error.innerHTML = "Por favor, preencha o campo Email"
        return false;
    }
    if ("" == form.subject.value) {
        error.innerHTML = "Por favor, preencha o campo Assunto"
        return false;
    }
    if ("" == form.content.value) {
        error.innerHTML = "Por favor, preencha o campo Conteudo"
        return false;
    }

    return true;
}
setDateCopyright();
setPortfolioData();