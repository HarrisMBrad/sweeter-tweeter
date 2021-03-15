let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}


// Show New Quote
function newQuote() {
	showLoadingSpinner();
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	// check if Author field is blank and replace with "Unknown"
	if (!quote.author)
	{
		authorText.textContent = 'Unknown';
	} else
	{
		authorText.textContent = quote.author;
	}

	// check length to determine styling
	if (quote.text.length > 120)
	{
		quoteText.classList.add('long-quote');
	} else
	{
		quoteText.classList.remove('long-quote');
	}

	// Set Quote, Hide Loader
	quoteText.textContent = quote.text;
	complete();

}

// API
let apiQuotes = [];

// Get Quotes from API
async function getQuotes() {
	showLoadingSpinner();
	const apiUrl = 'https://type.fit/api/quotes';

	try
	{
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();

	} catch (error)
	{
		// catch Error
	}
}

// Tweet A Quote

function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${ quoteText.textContent } - ${ authorText.textContent }`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on Load
getQuotes();

// For showing a new styles that match gradient chosen by user...

function newStyleQuote() {
	// for future development...
	showLoadingSpinner();
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);