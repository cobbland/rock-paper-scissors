let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let buttons = document.querySelector("#buttons");
let announcer = document.querySelector("#announcer");
let scores = document.querySelector("#scores"); 
let winner = document.createElement("div");

// Start game
buttons.addEventListener("click", (event) => {
    humanChoice = event.target.id;
    playRound(humanChoice,getComputerChoice());
});

// Generate computer choice
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 2) {
        computerChoice = "scissors";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "rock";
    }
    return computerChoice;
}

// Compare player input against computer choice
// Determine the winner
// Declare the winner
// Increment winning count
// Declare winning count
function playRound(humanChoice,computerChoice) {
    winner.textContent = "";
    if (humanChoice === computerChoice) {
        announcer.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        announcer.textContent = `You win! Your ${humanChoice} beats the computer's ${computerChoice}!`;
    } else {
        ++computerScore;
        announcer.textContent = `You lose! The computer's ${computerChoice} beats your ${humanChoice}!`;
    }
    scores.textContent = `Player wins: ${humanScore} | Computer wins: ${computerScore}`;
    if (winnerCheck(humanScore,computerScore)) {
        humanScore = 0;
        computerScore = 0;
    };
};

function winnerCheck(humanScore,computerScore) {
    if (humanScore >= 5) {
        winner.textContent = "You win the game!";
        scores.parentElement.appendChild(winner);
        return true;
    } else if (computerScore >= 5) {
        winner.textContent = "You lose the game!";
        scores.parentNode.appendChild(winner);
        return true;
    };
};