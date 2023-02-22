var displayNumber = document.querySelector('.countdown-display');
var currentNumber = 4;

function countdown() {
  if (currentNumber === 4) {
    displayNumber.textContent = 3;
    currentNumber--;
  } else if (currentNumber === 3) {
    displayNumber.textContent = 2;
    currentNumber--;
  } else if (currentNumber === 2) {
    displayNumber.textContent = 1;
    currentNumber--;
  } else if (currentNumber === 1) {
    displayNumber.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(countdown, 1000);
