function getCompChoice(max) {
    return Math.floor(Math.random() * max);
}
if (getCompChoice(3) === 1) {
    console.log("Rock");
}
else if (getCompChoice(3) === 2) {
    console.log("Scissors");
}
else {console.log("Paper");
}
//This function should allow the player to input a selection and play a round with the computer
//and out put a win or loss condition ex. You lose. Rock beats Scissors
function playRound(playerSelection, computerSelection) {
    let answer = parseInt(prompt("Time to duel! Choose Rock, Paper, or Scissors!"));
    let computerSelection = getCompChoice;
    if (playerSelection == "Rock") {
        playerSelection == computerSelection
    }
}
