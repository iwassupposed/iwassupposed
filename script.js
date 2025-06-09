fetch('./phrases.json')
  .then(response => response.json())
  .then(phrases => {
    const allPhrases = Object.values(phrases);
    const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
    document.getElementById("phrase").innerText = randomPhrase;
  });

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
    document.getElementById("newPhrase").addEventListener("click", getRandomPhrase);
  });
