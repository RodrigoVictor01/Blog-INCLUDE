
let time = 5000; // Tempo que cada imagem ficará sendo exibida na tela.
let images = document.querySelectorAll('.carousel img'); // Variável contento todas as imagens dentro da classe 'carousel'.
let currentIndex = 0; // Index da imagem começa em 0 (zero).
let maxImages = images.length; // Variável que quantifica as imagens dentro da classe 'carousel'.


// Função que irá passar as imagens no intervalo de tempo setado.
function nextImage() {

    // Inicia removendo a classe 'selected'. Do contrário, a repetição não seria possível ao chegar na última imagem.
    images[currentIndex].classList.remove('selected');

    // Incremento do index  da imagem a cada 5 segundos.
    currentIndex++;

    // Verifica se o index é maior que a quantidade de imagens. Se for maior, então o index passa a ser 0 (zero) novamente.
    if (currentIndex >= maxImages) {
        currentIndex = 0;
    }

    // Adiciona a classe 'selected' em uma imagem diferente a cada 5 segundos para que ela possa ser exibida.
    images[currentIndex].classList.add('selected');

}


// A cada 5 segundos (5000ms), setado na variável 'time', executa a função que troca as imagens.
function startCarousel() {
    setInterval(() => {
        nextImage();
    }, time)
}

// Verifica se a página foi carregada para executar a função que faz a troca de imagens.
window.addEventListener('load', startCarousel);
