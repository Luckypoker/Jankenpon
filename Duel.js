//Computer should randomly output either Rock, Paper, or Scissors
let playerScore = 0;
let compScore = 0;
function getComputerChoice(max) {
    var randomNumber = Math.floor(Math.random() * max);    
    switch (randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 0:
            return "Scissors";
    }
    }
     //Player and computer should be able to play out a round with the result being logged
function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    return result = "Tie! Just two rocks chilling in a hot tub~";
                case "Paper":
                    return result = "You lose! Paper beats rock, because throwing one at someone isn't as bad as throwing the other";
                case "Scissors":
                    return result = "You win! Rock beats scissors, good for the kid that discovered that but less so for the parents";
            }
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return result = "You win! Paper beats rock! Congrats writing beats the unga bunga";
                case "Paper":
                    return result = "Tie! Two treaties signed, but peace could never last...";
                case "Scissors":
                    return result = "You lose! Scissors beats paper! Don't blame yourself though, they were built specifically to stop you";
            }
        case "Scissors":
            switch (computerSelection) {
                case "Scissors":
                    return result = "Tie! Scissor fights are fun for the whole family!";
                case "Rock":
                    return result = "You lose! Rock beats scissors. Honestly putting either one in a snowball would hurt";
                case "Paper":
                    return result = "You win! Scissors beats paper! All your base are belong to us";
            }
    }
}
//This plays out a set amount of rounds defined by #1
function playGame (j) {
    for (let i = 1; i <= j; i++) {
        console.log(playRound(window.prompt("Time to duel! Choose Rock, Paper, or Scissors"), getComputerChoice(3)));
        console.log(playerScore, compScore);
        if (i == 5) {
            if (playerScore > compScore) {
            console.log("Congratulations! Winner winner chicken dinner!");
            } else if (j === 5 && (playerScore < compScore));
        }
    }
}
playGame(5); //#1
getComputerChoice(3);
	
	
	
