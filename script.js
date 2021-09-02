// Instantiate constants
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// instantiate global variables
let round = 1
let playerScore = 0;
let computerScore = 0;

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

// Function to play a single round. Take player selection and
// computerPlay value as parameters to determine winner
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

function getWinner(playerSelection, computerSelection){
    let playerValue = choices.indexOf(playerSelection);
    let computerValue = choices.indexOf(computerSelection);
    if(playerSelection == rock && computerSelection == scissors){
        playerValue += 3;
    }
    if (computerSelection == rock && playerSelection == scissors){
        computerValue =+3;
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

game()
