const noButton = document.getElementById("no-button");
const continueButton = document.getElementById("continue-button");

// Faz o botão No fugir
function escapeButton() {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Foge quando o mouse chega perto
noButton.addEventListener("mouseenter", escapeButton);

// Também funciona ao tocar no celular
noButton.addEventListener("touchstart", function (event) {
    event.preventDefault();
    escapeButton();
});

// Botão verdadeiro
continueButton.addEventListener("click", function () {
    window.location.href = "page3.html";
});