const options = ["Rock", "Paper", "Scissors"];
let optionIndex;
let computerOption;
let playerSelection;

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() { // returns computers option
    return options[getRandomInt()];
}

function playRound(playerSelection) { // gets player option, versus computeroption, returns result message
    computerSelection = computerPlay()
    if ((playerSelection) === computerSelection) {
        return "It's a draw";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! " + "Your " + playerSelection + " beats " +  computerSelection;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! " + "Your " + playerSelection + " beats " +  computerSelection;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! " + "Your " + playerSelection + " beats " +  computerSelection;
    }else{
        return "You lose! " + computerSelection + " beats your " + playerSelection ;
    }
}
    //prompt player input
    // str transform input, normalise so case insensitive (diff function?)
    // if playerSelection == computerOption, rtn "!"
    // else rtn lose

