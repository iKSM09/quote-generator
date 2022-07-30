const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeLoadingSpinner = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

// Show New Quote
const newQuote = () => {
  showLoadingSpinner();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Displaying random quote

  // Check if Author field is blank and replacing it with "Unknown"
  authorText.textContent = quote.author ? quote.author : "Unknown";

  //Check Quote length to determine styling
  const addLongQuote = quoteText.classList.add("long-quote");
  const removeLongQuote = quoteText.classList.remove("long-quote");
  quote.text.length > 100 ? addLongQuote : removeLongQuote;

  // Set quote, Hide Loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
};

// Getting quotes from an API
const getQuotes = async () => {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  // fetching quotes data
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error(error);
  }
};

//Tweet Quote
const tweetQuote = () => {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
};

// Event Listners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
