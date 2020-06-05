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
// function which uses random number to search for a quote in each array.
function quotesGenerator() {
    let firstRandomNumber = Math.floor(Math.random() * firstQuotes.length);
    let scdRandomNumber = Math.floor(Math.random() * scdQuotes.length);
    let thirdRandomNumber = Math.floor(Math.random() * thirdQuotes.length);
    // create a variable which concatenates the three quotes into one quote.
    let newQuotes = firstQuotes[firstRandomNumber] + " " + scdQuotes[scdRandomNumber] + " " +thirdQuotes[thirdRandomNumber] + ".";
    return newQuotes; // console a quote which include three sentences.
}

let quotesNumber = prompt("Enter a number of quotes you want between 1 and 5:");//  User choose the number of quotes between 1-5
    
        for(i = 0; i < quotesNumber; i++) { // a for loop which iterate the quotes depending on the nuber that the user set
        if(quotesNumber >= 1 && quotesNumber <=5) {
        let multipleQuotes = quotesGenerator();
        console.log(multipleQuotes);
        } else {
        console.log(`Invalid number, enter a number between 1 and 5`);
    }
}
    
