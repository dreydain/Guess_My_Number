'use strict';

let secretNumber = 0;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const calcSecretNumber = function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
};

const scoreDisplay = function (num) {
	document.querySelector('.score').textContent = num;
};

const numberDisplay = function (show) {
	document.querySelector('.number').textContent = show;
};

calcSecretNumber();

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	//When there is no input
	if (!guess) {
		displayMessage('⛔ No Number');

		// When Player Wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		numberDisplay(secretNumber);
		// document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// When Guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
			score--;
			scoreDisplay(score);
		} else {
			displayMessage('💥You lost the game!');
			scoreDisplay(0);
		}
	}
});

// Resetting the Game - Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	calcSecretNumber();
	displayMessage('Start guessing...');
	scoreDisplay(score);
	numberDisplay('?');
	// document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
