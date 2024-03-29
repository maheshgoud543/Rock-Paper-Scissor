function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"]
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]
}

// console.log(getComputerChoice())


function playRound(playerSelection, ComputerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === ComputerSelection) {
        console.log("It is a Tie")
    } else if (
        (playerSelection === "rock" && ComputerSelection === "scissors") ||
        (playerSelection === "paper" && ComputerSelection === "rock") ||
        (playerSelection === "scissors" && ComputerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${ComputerSelection}`;
    } else {
        return `You lose! ${ComputerSelection} beats ${playerSelection}`;
    }

}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Select, RocK/Paper/Scissor").toLowerCase();
        const ComputerSelection = getComputerChoice()
        const result = playRound(playerSelection, ComputerSelection);
        console.log(result)

        if (result.includes("Win")) {
            playerScore++
        } else if (result.includes("Lose")) {
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie game!");
    }

}

playGame();