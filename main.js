// Espera o documento estar pronto antes de executar qualquer código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os posters de filmes
    const moviePosters = document.querySelectorAll('.movie-poster');
    
    // Adiciona um efeito de hover nos posters
    moviePosters.forEach(poster => {
        poster.addEventListener('mouseover', () => {
            poster.style.transform = 'scale(1.05)'; // Aumenta a imagem
            poster.style.transition = 'transform 0.3s ease'; // Suaviza a transição
        });

        poster.addEventListener('mouseout', () => {
            poster.style.transform = 'scale(1)'; // Retorna ao tamanho original
        });
    });

    // Seleciona todos os atores
    const actors = document.querySelectorAll('.actor');
    
    // Adiciona um efeito de hover nos atores
    actors.forEach(actor => {
        actor.addEventListener('mouseover', () => {
            actor.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Muda a cor de fundo
            actor.style.transition = 'background-color 0.3s ease'; // Suaviza a transição
        });

        actor.addEventListener('mouseout', () => {
            actor.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Retorna à cor original
        });
    });
});
