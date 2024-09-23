const terms = [" Full Stack", " Game Dev", " Pixel Artist"];

let index = 0;
let charIndex = 0;
let isDeleting = false;
let char = '|';

const typingSpeed = 100;
const erasingSpeed = 50;
const pauseBetweenTerms = 1000;

const termElement = document.getElementById("animated-term");

function type() {
    const currentTerm = terms[index];
    
    if (!isDeleting && charIndex < currentTerm.length) {
        termElement.textContent = currentTerm.substring(0, charIndex + 1) + char;
        charIndex++;
        setTimeout(type, typingSpeed);
        
    } else if (isDeleting && charIndex > 0) {
        termElement.textContent = currentTerm.substring(0, charIndex - 1) + char;
        charIndex--;
        setTimeout(type, erasingSpeed);

    } else if (!isDeleting && charIndex === currentTerm.length) {
        termElement.textContent = currentTerm + '|';
        isDeleting = true;
        setTimeout(type, pauseBetweenTerms);

    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % terms.length;
        setTimeout(type, typingSpeed);
    }
}

function changeChar() {
    char = char === '|' ? '' : '|';
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed);
    setInterval(changeChar, 500);
});
