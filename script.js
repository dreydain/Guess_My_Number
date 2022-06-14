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

calcSecretNumber();

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(typeof guess);

	//When there is no input
	if (!guess) {
		displayMessage('⛔ No Number');

		// When Player Wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		document.querySelector('.number').textContent = secretNumber;

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
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

// Resetting the Game - Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	calcSecretNumber();
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
