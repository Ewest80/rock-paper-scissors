function getPlayerSelection() {
    const playerSelection = prompt("Rock, Paper, or Scissors?");

    // If the player cancels the game, return undefined
    if (playerSelection === null) {
        console.log("You have forfeited the game.");
        return;
    }

    if (isSelectionValid(playerSelection)) {
        return playerSelection.toLowerCase();
    }
    else {
        alert("No cheating! Please choose Rock, Paper or Scissors.");
        return getPlayerSelection();
    }
}

function isSelectionValid(selection) {
    const choice = selection.toLowerCase();

    return choice === 'rock' || choice === 'paper' || choice === 'scissors';
}

function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Tie! Both players chose ${playerSelection}.`;
    }
    else if (playerSelection === 'rock') {
        return computerSelection === 'scissors' ? 'You Win! Rock beats Scissors.' : 'You Lose! Paper beats Rock.';
    }
    else if (playerSelection === 'paper') {
        return computerSelection === 'rock' ? 'You Win! Paper beats Rock.' : 'You Lose! Scissors beats Paper.';
    }
    else if (playerSelection === 'scissors') {
        return computerSelection === 'paper' ? 'You Win! Scissors beats Paper.' : 'You Lose! Rock beats Scissors.';
    }
}

function displaySummary(playerScore, computerScore, tieScore) {
    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
    }
    else if (playerScore < computerScore) {
        console.log('You lose the game, better luck next time!');
    }
    else {
        console.log(`What a game! It's a tie!`);
    }

    console.log('Final Score:');
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log(`Ties: ${tieScore}`);
}

function playGame() {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    console.log("Welcome to Rock, Paper, Scissors!");
    for (let i = 0; i < rounds; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerSelection();

        // Prevent the game from continuing if the player canceled the game
        if (playerSelection === undefined) {
            return;
        }

        const result = playRound(playerSelection, computerSelection);
        if (result.includes('Win')) {
            playerScore++;
        }
        else if (result.includes('Lose')) {
            computerScore++;
        }
        else {
            tieScore++;
        }

        console.log(`Round ${i + 1}:`);
        console.log(result);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Ties: ${tieScore}`);
        console.log(`\n`);
    }

    displaySummary(playerScore, computerScore, tieScore);
}

playGame();