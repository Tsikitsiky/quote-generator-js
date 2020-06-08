console.log('it works!');
//create two array of object to store the quotes.
const firstQuotes = [
    "Risks must be taken",
    "Practice failure is the best way to learn",
    "You can do it"
]

const scdQuotes = [
    "the people who risk nothing do nothing",
    "try first",
    "no matter how hard life is stay calm",
    "God is always on your side"
]

const thirdQuotes = [
    "do not forget to pray",
    "you have enough knowledge to achieve it",
    "remember your strenght"
]
    // new quotation generator for the user to choose from where they want the quote.
let scdQuotesGen = {
    firstQuotes: [
        "Hard and harder",
        "Sometimes only at the end that you realise that you are wrong",
        "Don't give up"
    ],
    
     scdQuotes: [
        "try hard",
        "stay focused",
        "take your time",
        "take a seat and think"
    ],
    
     thirdQuotes: [
        "you are so brave",
        "time doesn't wait",
        "go faster don't look back"
    ]
}


// functions which use random number to search for a quote in each arrays.
function quotesGenerator() {
    let firstRandomNumber = Math.floor(Math.random() * firstQuotes.length);
    let scdRandomNumber = Math.floor(Math.random() * scdQuotes.length);
    let thirdRandomNumber = Math.floor(Math.random() * thirdQuotes.length);
    // create a variable which concatenates the three quotes into one quote.
    let newQuotes = firstQuotes[firstRandomNumber] + " " + scdQuotes[scdRandomNumber] + " " +thirdQuotes[thirdRandomNumber] + ".";
    return newQuotes; // console a quote which include three sentences.
}

function quotesGenerator2() {
    let firstRandomNumber = Math.floor(Math.random() * scdQuotesGen.firstQuotes.length);
    let scdRandomNumber = Math.floor(Math.random() * scdQuotesGen.scdQuotes.length);
    let thirdRandomNumber = Math.floor(Math.random() * scdQuotesGen.thirdQuotes.length);
    // create a variable which concatenates the three quotes into one quote.
    let newQuotes = scdQuotesGen.firstQuotes[firstRandomNumber] + " " + scdQuotesGen.scdQuotes[scdRandomNumber] + " " + scdQuotesGen.thirdQuotes[thirdRandomNumber] + ".";
    return newQuotes; // console a quote which include three sentences.
}
function choice() {
    let chosenGen = prompt("Choose a generator a or b:"); // the user is asked to choose from which generator they want the quotes
    if (chosenGen === "a") {
        multiples();
    } else if(chosenGen === "b"){
        multiples2();
    } else {
        console.log("Invalid choice");
    }
}

choice();

function multiples(){ //  User choose the number of quotes between 1-5
    let quotesNumber = prompt("Enter a number of quotes you want between 1 and 5:");
    for(i = 0; i < quotesNumber; i++) { // a for loop which iterate the quotes depending on the nuber that the user set
        if(quotesNumber >= 1 && quotesNumber <= 5) {
        console.log(quotesGenerator());
        } else {
        console.log(`Invalid number, enter a number between 1 and 5`);
        }
    }
}

function multiples2() { //  User choose the number of quotes between 1-5
        let quotesNumber2 = prompt("Enter a number of quotes you want between 1 and 5:");//  User choose the number of quotes between 1-5
        for(i = 0; i < quotesNumber2; i++) { // a for loop which iterate the quotes depending on the nuber that the user set
            if(quotesNumber2 >= 1 && quotesNumber2 <= 5) {
            console.log(quotesGenerator2());
            } else {
            console.log(`Invalid number, enter a number between 1 and 5`);
        }
    }
}

function askMoreQuotes() {
let moreQuote = prompt("Do you want more quotes? yes or no:") // Ask whether the user want to get more quotes
if (moreQuote === "yes") {
    choice();
    } else {
        alert("Thank you")
    }
}

askMoreQuotes();