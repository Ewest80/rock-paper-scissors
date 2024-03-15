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

