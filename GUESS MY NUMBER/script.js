'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'party correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// to cut repeatation of "document.querySelector('.message')" that's why we made a function

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');

    // when player guess is correct
  } else if (guess === secretNumber) {
    //documentquerySelector('.message').textContent = 'correct Number';
    displayMessage('correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // player guess to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('you lost the fuckin game fam ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* USED DRY METHOD TO DELETE THIS LINE OF CODE 

        // when player guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // player guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }


  */

// again button fucntion
document.querySelector('.again').addEventListener('click', addingFunction);

function addingFunction() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

// Theme Toggle Logic for Guess My Number
const themeToggleGuessNum = document.getElementById('themeToggleGuessNum');
const bodyGuessNum = document.body;
const guessNumThemeStatusKey = 'guessNumThemeStatus';

function applyGuessNumTheme() {
  const currentTheme = localStorage.getItem(guessNumThemeStatusKey);
  if (currentTheme === 'light') {
    bodyGuessNum.classList.add('light-mode');
    if (themeToggleGuessNum) themeToggleGuessNum.textContent = 'Toggle Dark Theme';
    // If game was won, and body background was changed by game logic, re-apply light theme win color
    if (bodyGuessNum.style.backgroundColor === 'rgb(96, 179, 71)') { // #60b347
        // bodyGuessNum.style.backgroundColor = '#90ee90'; // Or add a specific class like game-won-light
    }
  } else {
    bodyGuessNum.classList.remove('light-mode');
    if (themeToggleGuessNum) themeToggleGuessNum.textContent = 'Toggle Light Theme';
    // If body background was changed by game logic (e.g. to green on win), and now switching to dark, revert to dark theme default
     if (bodyGuessNum.style.backgroundColor === 'rgb(96, 179, 71)') { // #60b347
        // bodyGuessNum.style.backgroundColor = '#222'; // Default dark theme
    }
  }
}

if (themeToggleGuessNum) {
  themeToggleGuessNum.addEventListener('click', () => {
    bodyGuessNum.classList.toggle('light-mode');
    if (bodyGuessNum.classList.contains('light-mode')) {
      localStorage.setItem(guessNumThemeStatusKey, 'light');
      themeToggleGuessNum.textContent = 'Toggle Dark Theme';
      // If game was won and body has green background, this might need adjustment
      // For simplicity, the !important in CSS for body.light-mode background is preferred.
    } else {
      localStorage.setItem(guessNumThemeStatusKey, 'dark');
      themeToggleGuessNum.textContent = 'Toggle Light Theme';
      // If body has green background from win, and we toggle to dark, it will stay green
      // unless explicitly reset here or !important is used for body background-color in dark mode (which it is by default).
    }
  });
}

// Apply theme on initial load
// This runs after the main game script, so DOM is ready.
applyGuessNumTheme();
