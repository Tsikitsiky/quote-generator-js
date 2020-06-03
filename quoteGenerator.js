console.log('it works!');
//create two array of object to store the quotes.
//let firstQuotesGen = {  this should have been the first quote generator
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
//}
/* this should have been the second quote generator
let scdQuotesGen = {
    firstQuotes = [
        "Hard and harder",
        "Sometimes only at the end that you realise that you are wrong",
        "Don't give up"
    ],
    
     scdQuotes = [
        "try hard",
        "stay focused",
        "take your time",
        "take a seat and think"
    ],
    
     thirdQuotes = [
        "you are so brave",
        "time doesn't wait",
        "go faster don't look back"
    ]
}
*/
// function which uses random number to search for a quote in each array.
function quotesGenerator() {
    let firstRandomNumber = Math.floor(Math.random() * firstQuotes.length);
    let scdRandomNumber = Math.floor(Math.random() * scdQuotes.length);
    let thirdRandomNumber = Math.floor(Math.random() * thirdQuotes.length);
    // create an variable which concatenates the three quotes into one quote.
    let newQuotes = firstQuotes[firstRandomNumber] + " " + scdQuotes[scdRandomNumber] + " " +thirdQuotes[thirdRandomNumber] + ".";
    return newQuotes; // console a quote which include three sentences.
}
/* this should have been where the user choose their favourite quote generator.

let first = firstQuotesGen;
let second = scdQuotesGen;

let chosenGen = prompt("Chose a quote generator first or second:"); // Ask the user to choose from first quote generator or second
*/
let quotesNumber = prompt("Enter a number of quotes you want between 1 and 5:");//  User choose the number of quotes between 1-5

let multipleQuotes; // new variable which will store the new quotes

        for(i = 0; i < quotesNumber; i++) { // a for loop which iterate the quotes depending on the nuber that the user set
        /*if(chosenGen === first) {
            
        } else if(chosenGen === second) {
            
        }*/
        if(quotesNumber >= 1 && quotesNumber <=5) {
        multipleQuotes = quotesGenerator();
        console.log(multipleQuotes);
        } else {
        console.log(`Invalid number, enter a number between 1 and 5`);
    }
}
    

