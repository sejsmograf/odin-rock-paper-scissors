const weapons = document.querySelectorAll(".weapons img");
var userScore = 0;
var computerScore = 0;
const playerCounter = document.getElementById("playerCounter");
const computerCounter = document.getElementById("computerCounter");
const outcome = document.querySelector(".outcome p");

const elements = ['water', 'fire', 'tree'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return elements[randomIndex];
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
    if (playerChoice == computerChoice) { return "it's a draw"; }
    else if (playerChoice == 'water') {
        if (computerChoice == 'fire') { userScore++; return "you've won"; }
        else { computerScore++; return "you've lost"; }
    }
    else if (playerChoice == 'fire') {
        if (computerChoice == 'water') { computerScore++; return "you've lost"; }
        else { userScore++; return "you've won"; }
    }
    else {
        if (computerChoice == 'water') { userScore++; return "you've won"; }
        else { computerScore++; return "you've lost"; }
    }
}

function updateScores(result) {

    playerCounter.textContent = userScore;
    computerCounter.textContent=computerScore;
    outcome.textContent = result;
 }

 

weapons.forEach(
    weapon => {
        weapon.addEventListener('click', () => {updateScores(playRound(weapon.getAttribute('src').slice(0, -4)))});
    }
)