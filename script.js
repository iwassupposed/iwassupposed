let allPhrases = [];

function getRandomPhrase() {
  if (allPhrases.length === 0) return;

  const phraseElement = document.getElementById("phrase");

  // Fase 1: dissolve via
  phraseElement.classList.add("fade-out");

  // Fase 2: dopo 300ms cambia frase e riappare
  setTimeout(() => {
    const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
    phraseElement.innerText = randomPhrase;
    phraseElement.classList.remove("fade-out");
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch('./phrases.json')
    .then(response => response.json())
    .then(phrases => {
      allPhrases = Object.values(phrases);
      getRandomPhrase();
    });

  const button = document.getElementById("newPhrase");
  if (button) {
    button.addEventListener("click", getRandomPhrase);
  }
});
