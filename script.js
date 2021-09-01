// Instantiate constants
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// Instantiate array
let choices = [rock, paper, scissors];

// Get a radomly selected value for computer's choice
function computerPlay(){
    return getArrayValueOfIndex(getRandomNumber());
}

// return a random integer between 0 - 2
function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

// get the value of an array from given integer index
function getArrayValueOfIndex(index){
    return choices[index];
}

let compSelection = computerPlay();
document.getElementById('computerChoice').innerText = compSelection
console.log(compSelection)

