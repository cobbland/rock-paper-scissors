let humanScore = 0;
let computerScore = 0;

// Check for null input
function checkForNull(inputFromPrompt) {
    if (inputFromPrompt === null) {
        alert("Goodbye!");
    }
}

// Prompt player for input
function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper, or scissors.")
    checkForNull(humanChoice);
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors" &&
        humanChoice !== "lava") {
        humanChoice = prompt("Try again. You must choose rock, paper, or scissors.")
        checkForNull(humanChoice);
        humanChoice = humanChoice.toLowerCase();
    }
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
    if (humanChoice === computerChoice) {
        alert(`It's a tie! You and the computer both picked ${humanChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        alert(`You win! Your ${humanChoice} beats the computer's ${computerChoice}!`);
    } else if (humanChoice === "lava") {
        alert("You win the whole game! Lava beats everything!");
        console.log("You cheated. I hope you feel good about yourself.")
        humanScore = 100000000;
    } else {
        ++computerScore;
        alert(`You lose! The computer's ${computerChoice} beats your ${humanChoice}!`);
    }
    console.log(`Player wins: ${humanScore} | Computer wins: ${computerScore}`);
    alert(`Player wins: ${humanScore} | Computer wins: ${computerScore}`);
}

// Repeat
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert("You won the game!");
    } else {
        alert("You lost the game!");
    }
    playAgain();
}

// Ask if a new game should be played
function playAgain() {
    let newGame = prompt("Would you like to play again? Yes or no?");
    checkForNull(newGame);
    newGame = newGame.toLowerCase();
    while (newGame !== "yes" && newGame !== "no") {
        newGame = prompt("You must choose yes or no.");
        checkForNull(newGame);
        newGame = newGame.toLowerCase();
    }
    if (newGame === "yes") {
        humanScore = 0;
        computerScore = 0;
        alert("Great! Let's begin...");
        playGame();
    } else {
        alert("Goodbye!");
    }
}

// Begin!
playGame();