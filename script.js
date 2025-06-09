let allPhrases = [];

function getRandomPhrase() {
  const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
  document.getElementById("phrase").innerText = randomPhrase;
}

fetch('./phrases.json')
  .then(response => response.json())
  .then(phrases => {
    allPhrases = Object.values(phrases);
    getRandomPhrase();
  });

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("newPhrase");
  if (button) {
    button.addEventListener("click", getRandomPhrase);
  }
});
