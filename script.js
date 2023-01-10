const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote
function newQuote() {
  // Pick a random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author || 'Uknown author';
  // Check quote length to determine styling
  quote.text.length > 100 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote')
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (error) {
    // Catch error here
    console.log(error);
  }
}

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);

twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();