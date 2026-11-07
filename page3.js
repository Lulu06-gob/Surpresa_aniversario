const blowCandlesButton = document.getElementById("blow-candles-btn");
const cakeSide = document.querySelector(".cake-side");

blowCandlesButton.addEventListener("click", () => {
    // Apaga as chamas das velas
    cakeSide.classList.add("candles-blown");

    // Altera o texto do botão
    blowCandlesButton.textContent = "Fazendo um pedido... ✨";

    // Impede novos cliques
    blowCandlesButton.disabled = true;

    // Começa a escurecer a tela depois de um segundo
    setTimeout(() => {
        document.body.classList.add("page-fade-out");
    }, 1000);

    // Abre a página final depois da animação
    setTimeout(() => {
        window.location.href = "final.html";
    }, 3500);
});