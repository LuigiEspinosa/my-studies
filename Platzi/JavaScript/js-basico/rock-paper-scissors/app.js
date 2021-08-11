const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);

    return choices[random];
}

function convertToWord(letter)
 {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    if (letter === "scissors") return "Scissors";
 }

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    const userChoice_div = document.getElementById(user)
    let userChoice = convertToWord(user);
    let computerChoice = convertToWord(computer);

    result_div.innerHTML = 
        `${userChoice} beats ${computerChoice}. You win!`;

    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400)
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const userChoice_div = document.getElementById(user)
    let userChoice = convertToWord(user);
    let computerChoice = convertToWord(computer);

    result_div.innerHTML = 
        `${userChoice} loses to ${computerChoice}. You lost!`;

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400)
}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user)
    let userChoice = convertToWord(user);
    let computerChoice = convertToWord(computer);

    result_div.innerHTML = 
        `${userChoice} - ${computerChoice}. It's a draw!`;

    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 400)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice + "-" + computerChoice) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            win(userChoice, computerChoice);
            break;
        
        case "scissors-rock":
        case "rock-paper":
        case "paper-scissors":
            lose(userChoice, computerChoice);
            break;

        case "scissors-scissors":
        case "rock-rock":
        case "paper-paper":
            draw(userChoice, computerChoice);
            break;
    }
}

(function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
})();