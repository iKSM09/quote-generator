let apiQuotes = [];

// Selecting random quote from apiQuotes array
const randomQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
};

// Getting quotes from an API
const getQuotes = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  // fetching quotes data
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    randomQuote();
  } catch (error) {
    console.error(error);
  }
};

// On Load
getQuotes();
