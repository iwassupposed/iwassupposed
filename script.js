fetch('phrases.json')
  .then(response => response.json())
  .then(phrases => {
    const allPhrases = Object.values(phrases);
    const randomPhrase = allPhrases[Math.floor(Math.random() * allPhrases.length)];
    document.getElementById("phrase").innerText = randomPhrase;
  });
