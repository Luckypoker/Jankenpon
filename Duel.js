function getCompChoice(max) {
var randomNumber = Math.floor(Math.random() * max);
if (randomNumber === 1) {
     return "Rock";
}
else if (randomNumber === 2) {
    return "Scissors";
}
else {return "Paper";}
}
getCompChoice(3);
//This function should allow the player to input a selection and play a round with the computer
//and out put a win or loss condition ex. You lose. Rock beats Scissors
var playerSelection = window.prompt("Time to duel! Pick Rock, Paper, or Scissors");
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        return result = "Tie! Just two rocks chilling in a hot tub~";
    }   else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        return result = "You lose! Paper beats rock, because throwing one at someone isn't as bad as throwing the other";
    }   else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        return result = "You win! Rock beats scissors, good for the kid that discovered that but less so for the parents";
    }   else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return result = "Tie! Two treaties signed, but peace could never last..."
    }   else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        return result = "You win! Paper beats rock! Congrats writing beats the unga bunga"
    }   else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        return result = "You lose! Scissors beats paper! Don't blame yourself though, they were built specifically to stop you"
    }   else if ((playerSelection && computerSelection) === "Scissors") {
        return result = "Tie! Scissor fights are fun for both the kids and adults! Inuendo!"
    }   else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        return result = "You lose! Rock beats scissors. Honestly putting either one in a snowball would hurt"
    }   else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        return result = "You win! Scissors beats paper! All your base are belong to us"
    }
        else {
        return playerSelection;
        }
}
const computerSelection = getCompChoice(3);
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));