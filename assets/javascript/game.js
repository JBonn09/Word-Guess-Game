//var $placeholders = document.getElementById("placeholders");
//var $newGameButton = document.getElementById("new-game-button");
//var $guessedLetters = document.getElementById;("guessedLetters");
//var $guessesLeft = document.getElementById;("guessesLeft");
//var $wins = document.getElementById("wins");
//var $losses = document.getElementById("losses")

var words = ["geoffrey", "lurch", "alfred", "gereard"];

var chosenWord = "";
var lettersChosen = [];
var numBlanks = 0;
var rightAndWrongs = [];
var wrongGuesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

function newGame () {

    guessesLeft = 10;

    chosenWord = words[Math.floor(Math.random () * words.length)];

    lettersChosen = chosenWord.split("");

    numBlanks = lettersChosen.length;

    console.log(chosenWord);
}




//var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];









