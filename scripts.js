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

function toTitleCase(str) { //converts input to title case
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function playRound(playerSelection) { // gets player option, versus computeroption, returns result message
    playerSelection = toTitleCase(playerSelection);
    computerSelection = computerPlay()
    if ((playerSelection) === computerSelection) {
        return "It's a draw";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return "You win! " + "Your " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! " + "Your " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats your " + playerSelection;
    }
}

function game() {
    for (let round = 0; round < 5; round++) {
        let playerSelection = prompt("Three, two, one...");
        console.log(playRound(playerSelection));
    }
}

    //prompt player input
    // str transform input, normalise so case insensitive (diff function?)
    // if playerSelection == computerOption, rtn "!"
    // else rtn lose

