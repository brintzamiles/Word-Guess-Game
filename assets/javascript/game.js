//Words Array
const words  = ["summertime","chillaxin", "dmx", "coolio", "phat", "freestyle"];
// Randomly chooses a choice from the words array.

var GetRandWord = words[Math.floor(Math.random() * words.length)];
console.log(GetRandWord);

var displayspaces = [];
var correctguess = [];    
var wrongguess = [];
//Create Spaces based on the length of the word that's chosen from the array of words
let GenerateGameSpaces = () => { 
    for(let i = 0; i < GetRandWord.length; i++) {
        displayspaces.push('_');

    }
    return displayspaces;

}

console.log (GenerateGameSpaces());


//Get User's Guess

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

   // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);
        
    
//Check accuracy of guess
//If correct, push to correctguess array

if (GetRandWord.indexOf(userGuess) > -1) {
    console.log("true");
    correctguess.push(userGuess);
    console.log(correctguess);
    //replace space with letter
    displayspaces[GetRandWord.indexOf(userGuess)] = userGuess;
    console.log("replacing spaces", displayspaces);
    if (displayspaces.join("") == GetRandWord)
        alert ("You Win")
    }   
    //If wrong, push to wrongguess array 
else {
    console.log("false");
    wrongguess.push(userGuess);
    console.log(wrongguess);

    }
}
