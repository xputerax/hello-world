let currentGuess = 1,
  maxGuess = 5,
  random,
  body = document.querySelector("body"),
  number_label = document.querySelector("#number-label"),
  result = document.querySelector("#result"),
  number_input = document.querySelector("#number-input"),
  guess = document.querySelector("#guess"),
  reset = document.querySelector("#reset");

function setRandomNumber() {
  random = Math.ceil(Math.random() * 100);
}

function showResetButton() {
  reset.style.display = 'inline';
}

function hideResetButon() {
  reset.style.display = 'none';
}

function showGuessButton(){
  guess.style.display = 'inline';
}

function hideGuessButton(){
  guess.style.display = 'none';
}

function setResultText(text){
  result.innerHTML = text;
}

function setNumberLabel(text){
  number_label.innerHTML = text;
}

function resetCurrentGuess(){
  currentGuess = 1;
}

function startGame() {
  setNumberLabel('??');
  setResultText('');
  resetCurrentGuess();
  setRandomNumber();
  showGuessButton();
  hideResetButon();
}

function endGame() {
  setNumberLabel('The number was <br> ' + random);
  hideGuessButton();
  showResetButton();
}

function winGame(){
  endGame();
  setNumberLabel('Correct! The number was <br> ' + random);
}

startGame();

guess.addEventListener('click', function () {

  let number = parseInt(number_input.value, 10);

  if(!number) return;

  if(currentGuess <= maxGuess){
    if(number > random){
      setResultText('too big!')
    } else if (number < random) {
      setResultText('too small');
    } else {
      setResultText('correct');
      endGame();
    }
  }

  console.log(currentGuess);

  currentGuess++;

  if(currentGuess > maxGuess) {
    setResultText('game over');
    endGame();
  }

});

reset.addEventListener('click', startGame);