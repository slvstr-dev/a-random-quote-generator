// Array of quotes to loop through
const quotes = [{
		quote: "The most damaging phrase in the language is.. it's always been done this way.",
		source: "Grace Hopper",
		citation: "The Wit and Wisdom of Grace Hopper",
		year: 1987,
		tags: ["coding", "history", "wisdom"],
	},
	{
		quote: "The best error message is the one that never shows up.",
		source: "Thomas Fuchs",
		citation: "Medium",
		year: 2015,
		tags: ["coding", "humor"],
	},
	{
		quote: "Testing leads to failure, and failure leads to understanding.",
		source: "Burt Rutan",
		tags: ["coding", "wisdom", "humor"],
	},
	{
		quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
		source: "Joyce Wheeler",
		easterEgg: "&#x1f430;"
	},
	{
		quote: "Programming isn't about what you know; it's about what you can figure out.",
		source: "Chris Pine",
		citation: "Learn to Program",
	},
];

// Returns a random object of the quotes array using a random index of the quotes array
const getRandomQuote = quotesArray => quotesArray[Math.floor(Math.random() * quotesArray.length)];

// Returns a random number from 0 to 255 (possible rgb numbers)
const getRandomRgbValue = () => Math.floor(Math.random() * 256);

// Returns a random string with a rgb value
const setRandomBackgroundColor = () => `rgb(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()})`;

// Prints a random quote within the quote-box and sets the body to a random colored background
const printQuote = () => {
	let randomQuote = getRandomQuote(quotes);
	let quoteStr =
		`<p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}`;

	if (randomQuote.citation) {
		quoteStr += `<span class="citation">${randomQuote.citation}</span>`;
	}

	if (randomQuote.year) {
		quoteStr += `<span class="year">${randomQuote.year}</span>`;
	}

	if (randomQuote.easterEgg) {
		quoteStr += `<span>${randomQuote.easterEgg}</span>`
	}

	quoteStr += "</p>";

	if (randomQuote.tags) {
		quoteStr += "<ul class='tags'>";

		for (const tag of randomQuote.tags) {
			quoteStr += `<li class="tag">${tag}</li>`;
		}

		quoteStr += "</ul>";
	}

	document.getElementById("quote-box").innerHTML = quoteStr;
	document.getElementsByTagName("body")[0].style.backgroundColor = setRandomBackgroundColor();
};

// Calling the printQuote() function every 10 seconds
setInterval(() => {
	printQuote();
}, 10000);

// Listening for click events on the load-quote button
document.getElementById("load-quote").addEventListener("click", printQuote, false);