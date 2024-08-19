const userChoice = document.getElementById('userChoice');
const choiceElements = document.querySelectorAll("#userChoice .choice");
const userOutput = document.getElementById("human");
const computerOutput = document.getElementById("computer");
const computerLives = document.getElementById("computerLive");
const userLives = document.getElementById("userLive");
const restart = document.getElementById("restart");
const resultText = document.getElementById("result-text");
const endGameMsg = document.getElementById("endGameMsg");
const endGameText = document.getElementById("endGameText");
const endGameBtn = document.getElementById("endGameBtn");
const endGameExit = document.getElementById("endGameExit");

function restartGame() {
	userLives.textContent = "❤️".repeat(5);
	computerLives.textContent = "❤️".repeat(5);
	choiceElements.forEach( (item) => item.disabled = false);
	endGameMsg.style.display = "none";
	document.body.classList.remove("blur");
	resultText.textContent = "Choose Your Weapon";
}

function getComputerChoice(){
	const randomNumber = Math.random() * 3;

	if (randomNumber <= 1) {
		computerOutput.textContent = "✊";
	}
	else if (randomNumber <= 2) {
		computerOutput.textContent = "🖐️";
	}
	else {
		computerOutput.textContent = "✌️";
	}

	return computerOutput.textContent;
}

function playRound(userChoice, computerChoice, lives = 5) {
	if (
		(userChoice === "✊" && computerChoice === "✌️") ||
		(userChoice === "🖐️" && computerChoice === "✊") ||
		(userChoice === "✌️" && computerChoice === "🖐️")
	) {
		computerLives.textContent = computerLives.textContent.slice(2);
		resultText.textContent = `${userChoice} beats ${computerChoice}`;
	}
	else if ( userChoice === computerChoice) {
		//resultText.textContent = `${userChoice} is ties with ${computerChoice}`;
		resultText.textContent = "It's a draw. Go Again!";
	}
	else {
		userLives.textContent = userLives.textContent.slice(2);
		resultText.textContent = `${userChoice} is beaten by ${computerChoice}`;
	}

	if (userLives.textContent === "") {
		popupMessage("You Lost!");
	}
	else if (computerLives.textContent === "") {
		popupMessage("You Won!");
	}
}

function popupMessage(message) {
	endGameMsg.style.display = "flex";
	document.body.classList.add("blur");
	endGameText.textContent = message;

	endGameBtn.addEventListener("click", restartGame);
	endGameExit.addEventListener("click", () => {
	endGameMsg.style.display = "none";
	document.body.classList.remove("blur");
	});
}

restart.addEventListener("click", restartGame);
userChoice.addEventListener("click", (event) => {
	userOutput.textContent = event.target.textContent;
	playRound(event.target.textContent, getComputerChoice());
	if (!userLives.textContent || !computerLives.textContent) {
		choiceElements.forEach( (item) => item.disabled = true);
	}
});
