const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteButton = document.getElementById('newQuoteButton');



// Array of predefined quotes
const quotes = [
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Do or do not. There is no try.",
    author: "Yoda"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  }
];

newQuoteButton.addEventListener('click', generateRandomQuote);

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
}
