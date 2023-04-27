const cards = document.querySelectorAll('.card');

const cardss = document.querySelectorAll(".proximamente-card");



cardss.forEach(card => {
    const h2 = card.querySelector("h2");
    const hoverText = card.querySelector(".hover-text");

    card.addEventListener("mouseenter", () => {
        h2.style.opacity = "0";
        hoverText.style.opacity = "1";
    });

    card.addEventListener("mouseleave", () => {
        h2.style.opacity = "1";
        hoverText.style.opacity = "0";
    });
});