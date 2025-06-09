fetch('phrases.json')
  .then(response => response.json())
  .then(phrases => {
    const today = new Date().toISOString().split('T')[0];
    const phrase = phrases[today] || "I was supposed to be remembered.";
    document.getElementById("phrase").innerText = phrase;
  });
