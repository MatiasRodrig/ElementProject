const cards = document.querySelectorAll('.card');

const cardss = document.querySelectorAll(".proximamente-card");

cardss.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.querySelector("h2").style.display = "none";
        card.querySelector("p").style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
        card.querySelector("h2").style.display = "block";
        card.querySelector("p").style.display = "none";
    });
});
