/*
* Rock, Paper, Scissor game:
*
* A user plays against the computer to determine who wins.
*/

// Instantiate constants
const userSelectionDisplay = document.getElementById("user-selection")
const computerSelectionDisplay = document.getElementById("computer-selection")
const userChoiceImage = document.getElementById("user-image")
const computerChoiceImage = document.getElementById("computer-image")
const userCell = document.getElementById("user-cell")
const computerCell = document.getElementById("computer-cell")
const choices = document.querySelectorAll(".btn-choices")

// instantiate global variables
let userSelection
let computerSelection

/**
 * Set the css border attribute for the passed in HTML element
 * @param {*} element 
 * @param {*} borderStyle 
 */
function setBorder(element, borderStyle){
    element.style.border = `${borderStyle}`
}


function getUserSelection(){
    setBorder(userCell, "none")
    setBorder(computerCell, "none")

    choices.forEach(choice => choice.addEventListener("click", function(e){
        userSelection = e.target.id
        userSelectionDisplay.innerHTML = `${formatted(userSelection)}`
        getComputerSelection()
        updateImages()
        getWinner()
    }))
}

function getComputerSelection(){
    computerSelection = choices[Math.floor(Math.random() * choices.length)].getAttribute("id");
    computerSelectionDisplay.innerHTML = `${formatted(computerSelection)}`
}

function updateImages(){
    userChoiceImage.setAttribute("src", `./images/${userSelection}.png`)
    userChoiceImage.setAttribute("class", `images`)
    userChoiceImage.setAttribute("alt", `User selected image`)
    computerChoiceImage.setAttribute("src", `./images/${computerSelection}.png`)
    computerChoiceImage.setAttribute("class", `images`)
    computerChoiceImage.setAttribute("alt", `Computer selected image`)
}

function formatted(word){
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

function highlight(cell, borderType){
    cell.style.border = `${borderType}`
}

function getWinner(){
    highlight(userCell, "none")
    highlight(computerCell, "none")
    if(userSelection === computerSelection){
        highlight(userCell, "3px solid yellow")
        highlight(computerCell, "3px solid yellow")
    } else if(userSelection === "rock"){
        if(computerSelection === "scissors"){
            highlight(userCell, "3px solid green")
        } else {
            highlight(computerCell, "3px solid green")
        }
    }  else if(userSelection === "paper"){
        if(computerSelection === "rock"){
            highlight(userCell, "3px solid green")
        } else {
            highlight(computerCell, "3px solid green")
        }
    }  else if(userSelection === "scissors"){
        if(computerSelection === "paper"){
            highlight(userCell, "3px solid green")
        } else {
            highlight(computerCell, "3px solid green")
        }
    } 
}

getUserSelection();