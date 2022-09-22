/* George's AJAX project */
//Random Slide Show 

//quotes to choose from
const starwars = {
    quote: "Do or do not, there is no try.",
    citation: "Empire Strikes Back",
    source: "Yoda",
    year: "1980"
}

const joke = {
    quote: "If you are good at something, never do it for free.",
    citation: "The Dark Knight Rises",
    source: "The Joker",
    year: "2012"
}

const ring = {
    quote: "All we have to decide is what to do with the time given to us.",
    citation: "The Fellowship of the Ring",
    source: "Gandalf the Grey"
}

const Proverbs = {
    quote: "A good name is to be chosen rather than great wealth; To be respected is better than silver or gold.",
    citation: "King Solomon",
    source: "Proverbs 22:1",
    year: "717 B.C.E."
}

const school = {
    quote: "Never let success get into your head & failure into your heart.",
    source: "QE highschool"
}

//array for quotes 
const quotes = [starwars, joke, ring, Proverbs, school] 
//variable to store old random # (& set it to impossible #)
let n1 = -1

//func. to randomly pick # that goes w/ quote
function getRandomQuote() {
    //variable to store new random #
    let n2 = Math.floor(Math.random() * quotes.length)

    //loop to check if old # matchs w/ new # to avoid repeats
    while (n1 == n2) {
        n2 = Math.floor(Math.random() * quotes.length)
    }

    //update old #
    n1 = n2
    //spit out the index # for quotes
    return quotes[n2]
} 
 


function printQuote() {
     // 1. Create a variable that calls the getRandomQuote()
    // function
    let quote = getRandomQuote()

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now

    let innerString = '<p class="quote">' + quote.quote + '</p>'  
    innerString += '<p class="source">' + quote.source

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string

    if (quote.citation != undefined) {
        innerString += '<span class="citation">' + quote.citation + '</span>'
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    
    if (quote.year != undefined) {
        innerString += '<span class="year">' + quote.year + '</span>'
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string

    innerString += '</p>'

    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}

    document.getElementById('quote-box').innerHTML = innerString
}  

