let playerScore = 0;
let compScore = 0;
//DOM Manipulators
const container = document.querySelector('#container')
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content)
//Lists the scores
const scores = document.createElement("h1")
scores.classList.add("scores")
scores.textContent = `Player: ${playerScore} Computer: ${compScore}`
content.appendChild(scores)
//Gameplay Buttons
const btnr = document.querySelector("#btnr")
btnr.addEventListener('click', () => {
   results.textContent = playRound("Rock")
   roundResult.appendChild(results)
   scores.textContent = (`Player: ${playerScore} Computer: ${compScore}`)
   content.appendChild(scores)
   playGame()
})
const btnp = document.querySelector('#btnp')
btnp.addEventListener('click', () => {
    results.textContent = playRound("Paper")
    roundResult.appendChild(results)
    scores.textContent = (`Player: ${playerScore} Computer: ${compScore}`)
    content.appendChild(scores)
    playGame()
})
const btns = document.querySelector('#btns')
btns.addEventListener('click', () => {
    results.textContent = playRound("Scissors")
    roundResult.appendChild(results)
    scores.textContent = (`Player: ${playerScore} Computer: ${compScore}`)
    content.appendChild(scores)
    playGame()
})

const roundResult = document.createElement('div')
roundResult.classList.add('roundResult')
content.appendChild(roundResult)
const results = document.createElement('p')
results.classList.add("results")
//Computer should randomly output either Rock, Paper, or Scissors
let computerSelection = function getComputerChoice(max) {
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
function playRound (playerSelection) {
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection(3)) {
                case "Rock":
                    return result = "Tie! Just two rocks chilling in a hot tub~";
                case "Paper":
                    return result = compWins(), "You lose! Paper beats rock, because throwing one at someone isn't as bad as throwing the other";
                case "Scissors":
                    return result = playerWins(), "You win! Rock beats scissors, good for the kid that discovered that but less so for the parents";
            }
        case "Paper":
            switch (computerSelection(3)) {
                case "Rock":
                    return result = playerWins(), "You win! Paper beats rock! Congrats writing beats the unga bunga";
                case "Paper":
                    return result = "Tie! Two treaties signed, but peace could never last...";
                case "Scissors":
                    return result = compWins(), "You lose! Scissors beats paper! Don't blame yourself though, they were built specifically to stop you";
            }
        case "Scissors":
            switch (computerSelection(3)) {
                case "Scissors":
                    return result = "Tie! Scissor fights are fun for the whole family!";
                case "Rock":
                    return result = compWins(), "You lose! Rock beats scissors. Honestly putting either one in a snowball would hurt";
                case "Paper":
                    return result = playerWins(), "You win! Scissors beats paper! All your base are belong to us";
            }
    }
}
//This plays out a set amount of rounds defined by #1
let roundLimit = 5;
let i = 0;
function playGame () {
        i++
    if (i === roundLimit) {
        if (playerScore > compScore) {
            container.removeAttribute('id')
            const win = document.createElement("h1")
            win.classList.add("win")
            win.textContent = "Congratulations! Winner winner chicken dinner!"
            container.appendChild(win)
        } else if ((playerScore < compScore)) {
            container.removeAttribute('id')
            const loss = document.createElement("h1")
            loss.classList.add("loss")
            loss.textContent = "Imagine getting ratio'd by a program written by an alcoholic... couldn't be me"
            container.appendChild(loss)
        } else {container.removeAttribute('id')
        const tie = document.createElement("h1")
        tie.classList.add("tie")
        tie.textContent = "Holy smokes Lois, it's a tie!"
        container.appendChild(tie)};
    }
}
function playerWins () { 
    playerScore++
};
function compWins () {
    compScore++
};