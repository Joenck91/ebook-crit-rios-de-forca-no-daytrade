const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

let showTrades = [
    document.getElementById("trade1"),
    document.getElementById("prova1"),
    document.getElementById("trade2"),
    document.getElementById("prova2"),
    document.getElementById("trade3"),
    document.getElementById("prova3"),
    document.getElementById("trade4"),
    document.getElementById("prova4"),
    document.getElementById("trade5"),
    document.getElementById("prova5")
];

// Função para ocultar todas as imagens e mostrar apenas a imagem atual
function printImg() {
    // Oculta todas as imagens
    showTrades.forEach((img) => {
        img.style.display = 'none';  // Ou 'visibility: hidden'
    });

    // Mostra a imagem atual
    showTrades[index].style.display = 'block'; // Ou 'visibility: visible'
}

// Inicializa o carrossel com a primeira imagem visível
printImg();

// Evento do botão "Anterior"
prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : showTrades.length - 1;
    printImg();
});

// Evento do botão "Próximo"
nextButton.addEventListener('click', () => {
    index = (index < showTrades.length - 1) ? index + 1 : 0;
    printImg();
});

// Selecione o modal e outros elementos necessários
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgExpanded");
const closeModal = document.querySelector(".close");
const prevModal = document.querySelector('.prev-modal');
const nextModal = document.querySelector('.next-modal');
const loader = document.getElementById("loader");
let currentIndex = 0;

// Função para exibir a imagem ampliada no modal
function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    loader.style.display = "block"; // Mostra o spinner de carregamento
    modalImg.src = ''; // Reseta a imagem para evitar mostrar a anterior

    // Adiciona um listener para quando a imagem terminar de carregar
    modalImg.onload = function() {
        loader.style.display = "none"; // Esconde o spinner quando a imagem carregar
    };

    modalImg.src = showTrades[currentIndex].src; // Carrega a nova imagem
}

// Adicione o evento de clique para cada imagem no carrossel
showTrades.forEach((img, idx) => {
    img.addEventListener('click', () => {
        openModal(idx);
    });
});

// Feche o modal quando o usuário clicar no "X"
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Feche o modal quando o usuário clicar fora da imagem ampliada
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Mostra a imagem anterior no modal
prevModal.addEventListener('click', () => {
    openModal((currentIndex > 0) ? currentIndex - 1 : showTrades.length - 1);
});

// Mostra a próxima imagem no modal
nextModal.addEventListener('click', () => {
    openModal((currentIndex < showTrades.length - 1) ? currentIndex + 1 : 0);
});
