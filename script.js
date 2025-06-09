let allPhrases = [];

function getRandomPhrase() {
  if (allPhrases.length === 0) return;

  const phraseElement = document.getElementById("phrase");

  // Fase 1: dissolvenza in uscita
  phraseElement.classList.add("fade-out");

  // Fase 2: cambio testo dopo 300ms e dissolvenza in entrata
  setTimeout(() => {
    const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
    phraseElement.innerText = randomPhrase;
    phraseElement.classList.remove("fade-out");
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  // Caricamento frasi
  fetch('./phrases.json')
    .then(response => response.json())
    .then(phrases => {
      allPhrases = Object.values(phrases);
      getRandomPhrase();
    });

  // Bottone "another one"
  const button = document.getElementById("newPhrase");
  if (button) {
    button.addEventListener("click", getRandomPhrase);
  }

  // Overlay manifesto
  const manifesto = document.getElementById("manifestoOverlay");
  const toggle = document.getElementById("manifestoToggle");
  const close = document.getElementById("closeManifesto");

  if (toggle && close && manifesto) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      manifesto.style.display = "flex";
    });

    close.addEventListener("click", () => {
      manifesto.style.display = "none";
    });
  }
});
