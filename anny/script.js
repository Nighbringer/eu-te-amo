const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const message = document.getElementById('message');
const sound = document.getElementById('sound');

// Faz o botão "Não" se mover para posições difíceis
noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Mantém dentro da largura
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Mantém dentro da altura
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Exibe mensagem e toca som ao clicar em "Sim"
yesButton.addEventListener('click', () => {
    // Exibe mensagem especial
    message.innerHTML = `
        <p>Eu só queria dizer que você é uma pessoa incrível. <br>
        Sua alegria ilumina tudo ao seu redor, e seu sorriso..... poderia iluminar um planeta de tão lindo. E eu sinto que posso ser eu mesmo perto de você. 
        Obrigada por ser tão especial. Eu te amo Muito meu amor <3 💖</p>
    `;
    message.classList.remove('hidden');

    // Reseta o áudio e tenta reproduzir
    sound.currentTime = 0;
    sound.play().catch((error) => {
        console.error('Erro ao reproduzir o som:', error);
        alert('Som não pôde ser reproduzido! Verifique as permissões do navegador.');
    });

    // Chama a animação dos corações
    showFullScreenAnimation();
});

function showFullScreenAnimation() {
    const animationContainer = document.createElement('div');
    animationContainer.className = 'full-screen-hearts';
    document.body.appendChild(animationContainer);

    // Criar vários corações
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`; // Posição horizontal aleatória
        heart.style.animationDelay = `${Math.random() * 3}s`; // Tempo de atraso aleatório
        animationContainer.appendChild(heart);

        // Remover coração após a animação
        setTimeout(() => {
            heart.remove();
            if (i === 49) animationContainer.remove(); // Remove o container após a última animação
        }, 3000);
    }
}
