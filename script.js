const terminalText = document.getElementById("terminal-text");
const continueContainer = document.getElementById("continue-container");
const continueButton = document.getElementById("continue-button");

// Mensagens que serão exibidas no terminal
const messages = [
    "> Initializing profile...",
    "> Loading subject: Alexander",
    "> Establishing connection...",
    "> Name: Alexander",
    "> Age: Top Secret",
    "> Problems: Too much for one person",
    "> Music: ALWAYS!",
    "> Objective: Celebrate Alex's birthday and try to make him smile",
    "> Profile loaded successfully.",
    "> Surprise protocol: READY"
];

// Índice da mensagem atual
let currentMessage = 0;

// Adiciona uma nova linha no terminal
function addMessage() {
    if (currentMessage >= messages.length) {
        finishLoading();
        return;
    }

    const line = document.createElement("div");

    line.classList.add("terminal-line");

    if (currentMessage === messages.length - 1) {
        line.classList.add("highlight");
    }

    line.textContent = messages[currentMessage];

    terminalText.appendChild(line);

    currentMessage++;

    // Aguarda antes de mostrar a próxima mensagem
    setTimeout(addMessage, 800);
}

// Finaliza o carregamento e mostra o botão
function finishLoading() {
    const cursor = document.createElement("span");

    cursor.classList.add("cursor");

    terminalText.appendChild(cursor);

    continueContainer.classList.remove("hidden");
}

// Botão de continuar
continueButton.addEventListener("click", function () {
    window.location.href = "page2.html";
});

// Inicia o carregamento
addMessage();