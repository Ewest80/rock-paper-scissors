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

function playGame() {
    console.log(playRound(getPlayerSelection(), getComputerSelection()));
}

playGame();