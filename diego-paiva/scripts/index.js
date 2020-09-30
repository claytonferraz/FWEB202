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

setDateCopyright();
setPortfolioData();