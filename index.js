document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don’t take.",
    "The limit to our realization of tomorrow is our doubts of today."
  ];

  const button = document.getElementById('new-quote-button');
  const quoteDisplay = document.getElementById('quote');

  button.addEventListener('click', function () {
    quoteDisplay.textContent = '';

    setTimeout(function() {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      let randomQuote = '';

      // Loop through the array to get the random quote
      for (let i = 0; i < quotes.length; i++) {
        if (i === randomIndex) {
          randomQuote = quotes[i];
          break;
        }
      }

      quoteDisplay.textContent = randomQuote;
    }, 400); 
  });
});