/*
* Rock, Paper, Scissor game:
*
* A user plays five rounds against the computer to determine who is the winner. Best out of five wins. The user will input
* a value of Rock, Paper, or Scissors and the computer will randomly generate a value of Rock, Paper, or Scissors. Draw rounds 
* do not award a point to any player.
*
* Moved to a new directory and cloned a new project from github.
*/

// Instantiate constants
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// instantiate global variables
let round = 1
let playerScore = 0;
let computerScore = 0;
let keepPlaying = true;

// Instantiate array
let choices = [rock, paper, scissors];

// Main game function to keep track of rounds
function game(){
    for(let i = 1; i < 6; i++){
        console.log(playRound());
    }
    if(playerScore == computerScore){
        console.log("Tie Game: No Winner");
    } else {
        let scoreText = `Your Score (${playerScore}) - Computer Score (${computerScore})`;
        let winnerText = playerScore > computerScore ? `You WIN! ${scoreText}` : `You Lose! ${scoreText}`;
        console.log(winnerText);
    }
}

// Function to play a single round. Take player input and
// computerPlay value and call a function to determine the winner.
// Return a string stating whether the player wins, loses, or draws the round.
function playRound(){
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();
    if(playerSelection === computerSelection){
        return "Draw! You both picked " + playerSelection;
    } else {
        let winner = getWinner(playerSelection, computerSelection);
    return winner ? "You Won! " + playerSelection + " beats " + computerSelection :
        "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

// Take playerSelection and computerSelection as parameters and determine who won the round.
// Winner is determined by which selection has the greater index number. If, however, player chooses
// Rock and computer chooses Scissors (or vice versa) then Rock index value adds three to become greater
// than the value of Scissors index.
function getWinner(playerSelection, computerSelection){
    let playerValue = choices.indexOf(playerSelection);
    let computerValue = choices.indexOf(computerSelection);
    if(playerSelection == rock && computerSelection == scissors){
        playerValue += 3;
    }
    if (computerSelection == rock && playerSelection == scissors){
        computerValue += 3;
    }

    if(playerValue > computerValue){
        playerScore++;
        return true;
    } else {
        computerScore++;
        return false;
    }
}

// Prompt the user and return input
function getPlayerSelection(){
    let keepGoing = true;
    let promptChoices = ` ${choices[0]}, ${choices[1]}, or ${choices[2]}`;
    let promptText = `Choose One: ${promptChoices}`;
    let invalidChoice = `Invalid Selection - You must choose: ${promptChoices}`;
    let input = formattedInput(prompt(`${promptText}`));
    while(keepGoing){
        if(!isInputValid(input)){
            input = formattedInput(prompt(`${invalidChoice}`));
        } else {
            keepGoing = false;
        } 
    }
    input = formattedInput(input);
    return input;
}

// Verify the user input is valid
function isInputValid(input){
    return (input == choices[0] ||
            input == choices[1] ||
            input == choices[2]);
}

// Get a radomly selected value for computer's choice
function computerPlay(){
    return getArrayValueOfIndex(getRandomNumber());
}

// Returns a formatted input with a capitalized first letter and 
// the rest of the word in lowercase.
function formattedInput(input){
    let charArr = input.split("");
    charArr[0] = charArr[0].toUpperCase();
    for(let i = 1; i < charArr.length; i++){
        charArr[i] = charArr[i].toLowerCase();
    }
    return charArr.join("");
}

// return a random integer between 0 - 2
function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

// get the value of an array from given integer index
function getArrayValueOfIndex(index){
    return choices[index];
}

// Ask to play again. Return boolean.
function playAgain(){
    let playAgainPrompt = `Play again? \nEnter 'Yes' to play again, enter anything else to quit:`;
    let promptDefaultYes = `Yes`;
    return `Yes` == formattedInput(prompt(`${playAgainPrompt}`, `${promptDefaultYes}`));
}

// Rest the scores to 0
function resetScores(){
    playerScore = 0;
    computerScore = 0;
}

// Let's play a game...
alert("Open the developer tools to see console output");
while(keepPlaying){
    game();
    resetScores();
    keepPlaying = playAgain();
}

