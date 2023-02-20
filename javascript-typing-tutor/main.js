var $phrase = document.querySelectorAll('span');
var counter = 0;

window.addEventListener('keydown', keyBoard);

function keyBoard(event) {
  if ($phrase[counter].textContent === event.key) {
    $phrase[counter].className = 'correct';
    ++counter;
    $phrase[counter].className = 'underline';
  } else if ($phrase[counter].textContent !== event.key) {
    $phrase[counter].className = 'incorrect underline-red';
  }
}
