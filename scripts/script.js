/*
* Rock, Paper, Scissor game:
* A user plays a round of ROck Paper Scissors against the computer
*/

// Instantiate constants
const userSelectionDisplay = document.getElementById("user-selection")
const computerSelectionDisplay = document.getElementById("computer-selection")
const userChoiceImage = document.getElementById("user-image")
const computerChoiceImage = document.getElementById("computer-image")
const userCell = document.getElementById("user-cell")
const computerCell = document.getElementById("computer-cell")
const choices = document.querySelectorAll(".btn-choices")
const winnerBorder = "3px solid green"
const tieBorder = "3px solid yellow"

// instantiate global variables
let userSelection
let computerSelection

/**
 * function to start the game
 */
function play(){
    // Set event handler for buttons to return button id
    choices.forEach(choice => choice.addEventListener("click", function(e){
        userSelection = e.target.id
        userSelectionDisplay.innerHTML = `${formatted(userSelection)}`
        // get computer selection
        getComputerSelection()
        // update images with player and computer selections
        updateImages()
        // Put a border around the cell of the winner
        getWinner()
    }))
}

/**
 * Return a random selection from the 'choices' array
 */
function getComputerSelection(){
    computerSelection = choices[Math.floor(Math.random() * choices.length)].getAttribute("id");
    computerSelectionDisplay.innerHTML = `${formatted(computerSelection)}`
}

/**
 * Update the player and computer images with the corresponding image
 * of the selected option, as well as class and alt attributes
 */
function updateImages(){
    userChoiceImage.setAttribute("src", `./images/${userSelection}.png`)
    userChoiceImage.setAttribute("class", `images`)
    userChoiceImage.setAttribute("alt", `User selected image`)
    computerChoiceImage.setAttribute("src", `./images/${computerSelection}.png`)
    computerChoiceImage.setAttribute("class", `images`)
    computerChoiceImage.setAttribute("alt", `Computer selected image`)
}

/**
 * Capitalize the String parameter
 * @param {*} word 
 * @returns 
 */
function formatted(word){
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}


/**
 * Set the css border attribute for the passed in HTML element
 * @param {*} element 
 * @param {*} borderStyle 
 */
function setBorder(element, borderStyle){
    element.style.border = `${borderStyle}`
}

function getWinner(){
    // Clear any borders on user or computer cell elements
    setBorder(userCell, "none")
    setBorder(computerCell, "none")
    // Check if it's a tie and update both borders to yellow
    // If not a tie, determine winner and set winning border green
    if(userSelection === computerSelection){
        setBorder(userCell, tieBorder)
        setBorder(computerCell, tieBorder)
    } else if(userSelection === "rock" && computerSelection === "scissors"){
        setBorder(userCell, winnerBorder) 
    }  else if(userSelection === "paper" && computerSelection === "rock"){
        setBorder(userCell, winnerBorder) 
    }  else if(userSelection === "scissors" && computerSelection === "paper"){
        setBorder(userCell, winnerBorder) 
    } else {
        setBorder(computerCell, winnerBorder)
    }
}

play();