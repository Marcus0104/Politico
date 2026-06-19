// Seleciona o player de áudio e todas as frases do karaokê
const musica = document.getElementById('audio');
const frases = document.querySelectorAll('.palavra');

// Executa a função toda vez que o tempo da música muda
musica.addEventListener('timeupdate', () => {
    const tempoAtual = musica.currentTime;

    frases.forEach(frase => {
        // Pega o segundo exato definido no atributo data-tempo do HTML
        const tempoDaFrase = parseFloat(frase.getAttribute('data-tempo'));

        // Se o áudio passou daquele segundo, adiciona a classe para mudar a cor
        if (tempoAtual >= tempoDaFrase) {
            frase.classList.add('cantada');
        } else {
            // Se o usuário voltar a música, a frase apaga novamente
            frase.classList.remove('cantada');
        }
    });
});

// Executa a função quando a música chega ao fim
musica.addEventListener('ended', () => {
    frases.forEach(frase => {
        frase.classList.remove('cantada');
    });
});
