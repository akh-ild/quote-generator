let apiQuotes = [];

// Show new quote
function newQuote() {
  // Pick a random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  return quote;
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

// On load
getQuotes();