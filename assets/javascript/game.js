//Create the Words Array
var words  = ["Kellogs", "Lysol", "Levis","Nike", "Coke", "Apple", "Mercedes Benz", "BMW", "Tesla", "Pepsi", "Kitchen Aid", "Whirlpool", "Underarmour"];
// Randomly chooses a choice from the words array.

var getRandWord;

var displaySpaces = [];
var correctGuess = [];    
var wrongGuess = [];
var wins = 0;
var losses = 0;
var remaining = 9;
var wordLengthTracker = 0;
var gameRunning = false;
guessedLetter = [];



function playNewGame(){
    console.log("start");

//Run this function at the beginning of every game
//Reset the guesses and remaining    
wrongGuess = [];
remaining = 9;   
gameRunning = true;   
wordLengthTracker = 0;
displaySpaces = [];
correctGuess = [];  
guessedLetter = [];

//Get a random word from words array
getRandWord = words[Math.floor(Math.random() * words.length)];
//Create Spaces based on the length of the word that's chosen from the array of words 
for(var i = 0; i < getRandWord.length; i++) {
    console.log (getRandWord);
    if (getRandWord[i] === ' ') {
        console.log ("issa space");
        displaySpaces.push('*');
        wordLengthTracker++;
    }
    else {
    displaySpaces.push('_');
    }
}

    
    //write results to the screen

    document.getElementById('guessesLeft').textContent  = remaining;

    document.getElementById('currentWord').textContent  = displaySpaces.join(' ');

    document.getElementById('lettersAlreadyGuessed').textContent  = guessedLetter;

}

function Guess(userGuess) {
    console.log("userGuess " + userGuess);
    console.log("GamingRunning: " + gameRunning);
    //game is running AND you haven't guessed this letter
    if (gameRunning === true && (correctGuess.indexOf(userGuess) === -1)) {
            console.log(userGuess);
            guessedLetter.push(userGuess);

            for(var i = 0; i < getRandWord.length; i++) {
                // console.log("show rand by index: " + getRandWord[i].toLowerCase());
                //console.log("show userGuess by index: " + userGuess);

                if (getRandWord[i].toLowerCase() === userGuess){
                    console.log ("found it");

                    displaySpaces[i] = getRandWord[i]; 
                    correctGuess[i] =  userGuess;  
                    wordLengthTracker++;
                    //trackWinLoss();

                    
                }
                    
         
                }
                document.getElementById('currentWord').textContent  = displaySpaces.join(' ');

                isItInCorrect(userGuess);
                trackLosses();
                trackWins();

        
    } else {
    if (gameRunning === false){
        alert("Click to start new game");
    }
    else {
            alert("You guessed this letter already.  Try again");
        }
    }

}
    
 



document.onkeyup = function(event) {
    //only lets me select a-z...pretty cool...no more meta
    if (event.keyCode >= 65 && event.keyCode <=90) {
        console.log(event.keyCode);

    Guess(event.key);
    }
}



document.getElementById("startNewGame").addEventListener("click", function(){playNewGame()});







function isItInCorrect (userGuess) {
    console.log(correctGuess.indexOf(userGuess));
    if (correctGuess.indexOf(userGuess) === -1) {

    console.log("wrong");
    remaining --;
    console.log("remaining " + remaining);
    wrongGuess.push(userGuess);
    console.log ("wrongGuess:  " + wrongGuess);
    document.getElementById('lettersAlreadyGuessed').textContent  = wrongGuess.join(" ");
    document.getElementById('guessesLeft').textContent  = remaining;


        
   }
}

function trackLosses() {
  if (remaining === 0) {
    alert("You Lose!");
    losses++;
    gameRunning = false;
    document.getElementById('Losses').textContent  = losses;
  }}

  function trackWins() {
    

    if (getRandWord.length === wordLengthTracker) {
        console.log("wordLengthTracker" + wordLengthTracker);

        console.log("equal"); 
        
      alert("You Win!");
      wins++;
      gameRunning = false;
      document.getElementById('Wins').textContent  = wins;
    
    }
}

   