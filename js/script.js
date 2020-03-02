/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//-------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
//LOOKING FOR THE "EXCEEDS EXPECTATIONS GRADE" BUT IF I PASS WITH "MEETS EXPECATIONS" THATS FINE TOO
//<<<<<<<<<<<<<<<<<<<----------------------

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Array of Objects
const quotes = [
  {
    quote: "The very word secrecy is repugnant in a free and open society; and we are as a people inherently and historically opposed to secret societies, to secret oaths and to secret proceedings.",
    source: "35th President John F. Kennedy",
    citation: "Address before the American Newspaper Publishers Association",
    year: 1961
  },
  {
    quote: "Ease is a greater threat to progress than hardship",
    source: "Denzel Washington",
    citation: "Commencement speech Dillard University",
    year: 2015
  },
  {
    quote: "We really have to do the hard work to truly understand systemic racism. I think that it is the obligation of the people who have created and perpetuated and benefited from a system of oppression to dismantle it … so that's on us.",
    source: "Joaquin Phoenix",
    citation: "British Academy Film Awards acceptance speech",
    year: 2020,
    location: "South Kensington, London"
  },
  {
    quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
    source: "Steve Jobs",
    citation: "Commencement speech Standford University",
    year: 2005
  },
  {
    quote: "It is impossible to live without failing at something unless you live so cautiously that you might as well not have lived at all - in which case, you've failed by default. You will never truly know yourself, or the strength of your relationships, until both have been tested by adversity",
    source: "J.K Rowling",
    citation: "Commencement speech Harvard University",
    year: 2008
  }
];


/***
 * `getRandomQuote` function
***/
// Generates random quote
function getRandomQuote(fromQuotesArray) {
  const randomNumber = Math.floor(Math.random() * fromQuotesArray.length);
  const randomQuoteObject = fromQuotesArray[randomNumber];
  return randomQuoteObject;
}


/***
 * `printQuote` function
***/
// Generates random quote by untilizing the getRandomQuote function
function printQuote() {
  const randomQuotes = getRandomQuote(quotes);
  let html = '<p class="quote">' + randomQuotes.quote + '</p>' + '<p class="source">' + randomQuotes.source;
  // Checks if quote has the following properties - citation, year, location, and prints and adds them to quote
  if (randomQuotes.citation) {
    html += '<span class="citation">' + randomQuotes.citation + '</span>';  
  }
  if (randomQuotes.year) {
    html += '<span class="year">' + randomQuotes.year + '</span>'; 
  }
  if (randomQuotes.location) {
    html += '<span class="location">' + randomQuotes.location + '</span>';
  }
  html += '</p>';
  return html;
}

// Generates random color. Code is from Developer --> Ahkil sai <--: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function randomBackgroundColor() {
  const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

// Edits body background-color by injecting a random Hexadecimal color value
document.querySelector('body').style.backgroundColor = randomBackgroundColor();

// Prints quote to webpage
document.getElementById('quote-box').innerHTML = printQuote();

// Refreshes webpage auotmatically. Code is from --> Junior Developer Central <-- Youtube page: https://www.youtube.com/watch?v=5hLbCC2YPu0
setInterval(() => {
  window.location.reload(true);  
}, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);