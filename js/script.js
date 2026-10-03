
const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("#menu");
const modal = document.querySelector("#modal-cadastro");
const botaoFecharModal = document.querySelector("#fechar-modal");
const botaoCadastrar = document.querySelector("#cadastrar");
const formulario = document.querySelector(".formulario");
const alerta = document.querySelector(".alerta");
const conteudo = document.querySelector("#conteudo");
const cardsAjuda = document.querySelector("#cards-ajuda");

const dadosCards = [
    {
        titulo: "Doações",
        texto: "Você pode contribuir através de doações."
    },
    {
        titulo: "Voluntariado",
        texto: "Você pode contribuir participando como voluntário.",
        badge: "Precisamos de voluntários"
    }
]; 

if (cardsAjuda) {
    dadosCards.forEach(function (card) {

        cardsAjuda.innerHTML += `
            <div class="card">
                <h3>${card.titulo}</h3>
                ${card.badge ? `<span class="badge">${card.badge}</span>` : ""}
                <p>${card.texto}</p>
            </div>
        `;
    });
}

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");

        const menuAberto = menu.classList.contains("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );
    });
}

if (modal && botaoFecharModal) {

    botaoFecharModal.addEventListener("click", function () {
       
        modal.classList.remove("modal-aberto");
    });

}

if (formulario && modal && alerta) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        modal.classList.add("modal-aberto");

        alerta.classList.add("alerta-visivel");
    });

}

if(conteudo){

    conteudo.innerHTML = "<h2>Início</h2><p>Bem-vindo à ONG Mãos que Ajudam.</p>"

}

