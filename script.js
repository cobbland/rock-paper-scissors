let humanScore = 0;
let computerScore = 0;

// Prompt player for input
function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper, or scissors");
    // Validate input??
    return humanChoice;
}

// Generate computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
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
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You and the computer both picked ${humanChoice}!`);
        alert(`It's a tie! You and the computer both picked ${humanChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        console.log(`You win! Your ${humanChoice} beats the computer's ${computerChoice}!`);
        alert(`You win! Your ${humanChoice} beats the computer's ${computerChoice}!`);
    } else {
        ++computerScore;
        console.log(`You lose! The computer's ${computerChoice} beats your ${humanChoice}!`);
        alert(`You lose! The computer's ${computerChoice} beats your ${humanChoice}!`);
    }
    console.log(`Player wins: ${humanScore} | Computer wins: ${computerScore}`);
    alert(`Player wins: ${humanScore} | Computer wins: ${computerScore}`);
}

// Repeat
function playGame() {
    playRound(getHumanChoice(),getComputerChoice());
}