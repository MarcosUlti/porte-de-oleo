const terms = [" Full Stack", " Game Dev", " Pixel Artist"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;  // Velocidade de digitação
const erasingSpeed = 50;  // Velocidade para apagar
const pauseBetweenTerms = 1000;  // Pausa entre apagar e escrever o próximo termo

const termElement = document.getElementById("animated-term");

function type() {
    const currentTerm = terms[index];
    
    if (!isDeleting && charIndex < currentTerm.length) {
        // Se não está apagando e ainda há caracteres a serem digitados
        termElement.textContent = currentTerm.substring(0, charIndex + 1) + '|';
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        // Se está apagando e ainda há caracteres a serem apagados
        termElement.textContent = currentTerm.substring(0, charIndex - 1) + '|';
        charIndex--;
        setTimeout(type, erasingSpeed);
    } else if (!isDeleting && charIndex === currentTerm.length) {
        // Pausa no final do termo antes de começar a apagar
        termElement.textContent = currentTerm + '|';
        setTimeout(() => isDeleting = true, pauseBetweenTerms);
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
        // Mudar para o próximo termo quando o atual foi completamente apagado
        isDeleting = false;
        index = (index + 1) % terms.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed); // Iniciar a animação após o carregamento da página
});
