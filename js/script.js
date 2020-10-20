/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
	{
		quote:
			"The most damaging phrase in the language is.. it's always been done this way.",
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
		quote:
			"Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
		source: "Joyce Wheeler",
	},
	{
		quote:
			"Programming isn't about what you know; it's about what you can figure out.",
		source: "Chris Pine",
		citation: "Learn to Program",
	},
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = (quotesArray) =>
	quotesArray[Math.floor(Math.random() * quotesArray.length)];

/***
 * `getRandomRgbValue` function
 ***/
const getRandomRgbValue = () => Math.floor(Math.random() * 255);

/***
 * `setRandomBackgroundColor` function
 ***/
const setRandomBackgroundColor = () => {
	const randomRgbColor = `rgb(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()})`;

	document.getElementsByTagName(
		"body"
	)[0].style.backgroundColor = randomRgbColor;
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
	let randomQuote = getRandomQuote(quotes);
	let quoteBox = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
    `;

	if (randomQuote.citation) {
		quoteBox += `<span class="citation">${randomQuote.citation}</span>`;
	}

	if (randomQuote.year) {
		quoteBox += `<span class="year">${randomQuote.year}</span>`;
	}

	quoteBox += "</p>";

	if (randomQuote.tags) {
		quoteBox += "<ul class='tags'>";

		for (const tag of randomQuote.tags) {
			quoteBox += `<li class="tag">${tag}</li>`;
		}

		quoteBox += "</ul>";
	}

	document.getElementById("quote-box").innerHTML = quoteBox;
	setRandomBackgroundColor();
};

/***
 * `setQuoteAtInterval`
 ***/
setInterval(() => {
	printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);
