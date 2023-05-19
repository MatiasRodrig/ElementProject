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


const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    const botones = document.querySelector('ul.botones');
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
        botones.classList.toggle("mostrar");
    });
});

