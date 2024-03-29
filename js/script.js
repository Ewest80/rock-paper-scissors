let playerScore = 0;
let computerScore = 0;
let rounds = 1;

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const resetBtn = document.querySelector('#resetBtn');
const buttons = document.querySelectorAll('.selectable-btn');
let gameInfo = document.querySelector('#gameInfo');
let playerScoreDisplay = document.querySelector('#playerScore');
let computerScoreDisplay = document.querySelector('#computerScore');
let roundDisplay = document.querySelector('#roundNumber');
const gameOverSection = document.querySelector('#gameOverSection');
const gameOverText = document.querySelector('#gameOverText');

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
resetBtn.addEventListener('click', () => resetGame());

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('active');
    })

    button.addEventListener('mouseup', () => {
        button.classList.remove('active');
    })
})

function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameInfo.textContent = `It's a Tie! Both players chose ${playerSelection}.`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        gameInfo.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore++;
        gameInfo.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function playGame(playerSelection) {
    const computerSelection = getComputerSelection();

    playRound(playerSelection, computerSelection);

    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();

    roundDisplay.textContent = rounds.toString();
    rounds++;

    highlightSelection(playerSelection, computerSelection);

    if (isGameOver()) {
        handleGameOver();
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function handleGameOver() {
    displayGameOverMessage(playerScore, computerScore);
    rockBtn.disabled = true;
    rockBtn.classList.toggle('disable');
    paperBtn.disabled = true;
    paperBtn.classList.toggle('disable');
    scissorsBtn.disabled = true;
    scissorsBtn.classList.toggle('disable');
    gameOverSection.classList.toggle('hidden');
}

function displayGameOverMessage(playerScore, computerScore) {
    if (playerScore > computerScore) {
        gameOverText.textContent = 'Congratulations! You won the game!';
    }
    else if (playerScore < computerScore) {
        gameOverText.textContent = 'You lose the game, better luck next time!';
    }
    else {
        gameOverText.textContent = `What a game! It's a tie!`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
    roundDisplay.textContent = rounds.toString();
    gameInfo.textContent = 'Make your move!';
    rockBtn.disabled = false;
    rockBtn.classList.toggle('disable');
    paperBtn.disabled = false;
    paperBtn.classList.toggle('disable');
    scissorsBtn.disabled = false;
    scissorsBtn.classList.toggle('disable');
    gameOverSection.classList.toggle('hidden');
}

function highlightSelection(playerSelection, computerSelection) {
    const playerSelectionBtn = document.querySelector(`#${playerSelection}Btn`);
    const computerSelectionBtn = document.querySelector(`#${computerSelection}BtnCPU`);

    playerSelectionBtn.style.boxShadow = '0 0 15px 2px blue';
    computerSelectionBtn.style.boxShadow = '0 0 15px 2px red';

    setTimeout(() => {
        playerSelectionBtn.style.boxShadow = 'none';
        computerSelectionBtn.style.boxShadow = 'none';
    }, 500);
}
