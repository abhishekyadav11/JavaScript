let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('button');
const userInput = document.querySelector('input');
const previous = document.querySelector('#previousGuess');
const remains = document.querySelector('#remainingGuess');
const lowOrHigh = document.querySelector('#lowOrHigh');
const box3 = document.querySelector('.box3');

let prevGuess = [];
let numGuess = 1;


const p = document.createElement('p');

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}


// Validates the guessed value with some major conditions
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter number');
    } else if (guess < 1) {
        alert('Plaese enter number more than 1');
    } else if (guess > 100) {
        alert('Please enter number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`<span style="color: #ed5e5e;">Game Over !</span> Random numer was <span style="color: #ed5e5e;">${randomNumber}</span>`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}


// Displays the Previous guessed value & Remaining guesses value
function displayGuess(guess) {
    userInput.value = '';
    previous.innerHTML += `${guess}  `;
    numGuess++;
    remains.innerHTML = ` ${11 - numGuess} `;
 }


// Checks the guessed value is Right Guessed Or Low Or High
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`<h2 style="color: #04a871;">Congratulations !!! You guessed it right<h2>`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO High`);
    }
}


// Displays Guessed Value Result 
function displayMessage(message) {
   lowOrHigh.innerHTML = message;
}


// End Game
function endGame() {
   userInput.value = '';
   userInput.setAttribute('disabled','');
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
   p.style.display = 'inline-block';
   p.style.borderRadius = '10px';
   p.style.backgroundColor = '#7f7ff4';
   p.style.color = '#fff';
   box3.appendChild(p);
   playGame = false;
   newGame();
}


// Start New Game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(){
    let randomNumber = Math.floor(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;

    previous.innerHTML = '';
    remains.innerHTML = ` ${11 - numGuess} `;
    lowOrHigh.innerHTML = '';
    userInput.removeAttribute('disabled');
    box3.removeChild(p);

    playGame = true;
  })
}
