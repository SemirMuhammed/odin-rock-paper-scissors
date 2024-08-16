// Logic to get Computer Choice
function getComputerChoice(){
	const randomNumber = Math.random() * 3;

	if (randomNumber <= 1) {
		const computerOutput = document.getElementById("computer");
		computerOutput.textContent = "✊";
		return "✊";
	}
	else if (randomNumber <= 2) {
		const computerOutput = document.getElementById("computer");
		computerOutput.textContent = "🖐️";
		return "🖐️";
	}
	else {
		const computerOutput = document.getElementById("computer");
		computerOutput.textContent = "✌️";
		return "✌️";
	}
}

let userChoice = "✊"; // default value
let computerChoice = "✊";
const userRock = document.getElementById('rock');
const userPaper = document.getElementById('paper');
const userScissors = document.getElementById('scissors');

userRock.addEventListener("click", () => {
	userChoice = "✊";
	getHumanChoice();
	computerChoice = getComputerChoice();
	playRound(userChoice, computerChoice);
});

userPaper.addEventListener("click", () => {
	userChoice = "🖐️";
	getHumanChoice();
	computerChoice = getComputerChoice();
	playRound(userChoice, computerChoice);
});

userScissors.addEventListener("click", () => {
	userChoice = "✌️";
	getHumanChoice();
	computerChoice = getComputerChoice();
	playRound(userChoice, computerChoice);
});

function getHumanChoice() {
	const userOutput = document.getElementById("human");
	userOutput.textContent = userChoice;
}

let computerLives = 5;
let userLives = 5;
function playRound(userChoice, computerChoice) {
	const scoreBoard = document.querySelector(".scoreboard");
	if (
		(userChoice === "✊" && computerChoice === "✌️") ||
		(userChoice === "🖐️" && computerChoice === "✊") ||
		(userChoice === "✌️" && computerChoice === "🖐️")
	) {
		computerLives--;
		printMessage(`Computer Lives: ${computerLives}`, `User Lives: ${userLives}`, 'score-board');
	}
	else if ( userChoice === computerChoice)
		printMessage(`Computer Lives: ${computerLives}`, `User Lives: ${userLives}`, 'score-board');
	else {
		userLives--;
		printMessage(`Computer Lives: ${computerLives}`, `User Lives: ${userLives}`, 'score-board');
	}
	if (computerLives == 0) {
		const output = document.getElementById('score-board');
		output.innerHTML += `<p>Congratulations!!! You Won the Game</p>`;
		output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
		computerLives = userLives = 5;
	}
	else if (userLives == 0) {
		const output = document.getElementById('score-board');
		output.innerHTML += `<p>Ops!!! You lost the Game</p>`;
		output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
		computerLives = userLives = 5;
	}
}
		
function printMessage(message1, message2, id) {
	const output = document.getElementById(id);
	output.textContent = `${message1.toUpperCase()}`;
	output.innerHTML += `<p>${message2.toUpperCase()}</p>`;
	output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
};
