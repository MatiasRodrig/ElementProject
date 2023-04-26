const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const link = card.querySelector('a');
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.getAttribute('href');
        window.location.href = url;
    });
});