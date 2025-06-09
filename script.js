let allPhrases = [];

function getRandomPhrase() {
  if (allPhrases.length === 0) return;
  const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
  document.getElementById("phrase").innerText = randomPhrase;
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
