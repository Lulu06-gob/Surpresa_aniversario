const finalizeButton = document.getElementById("finalize-btn");
const closeMessage = document.getElementById("close-message");

finalizeButton.addEventListener("click", () => {
    finalizeButton.disabled = true;
    finalizeButton.textContent = "You can close this page now...";

    closeMessage.textContent =
        "Now, text me on whaatsapp, im really nervous praying for it to work!...💙";

    // Tenta fechar a aba/janela
    window.close();

    // Caso o navegador bloqueie o fechamento
    setTimeout(() => {
        closeMessage.textContent =
            "Now, text me on whaatsapp, " +
            "im really nervous praying for it to work!...💙";
    }, 800);
}); 
