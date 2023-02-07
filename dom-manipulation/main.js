var clickCounter = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function changeTemp(event) {
  clickCounter++;
  if (clickCounter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clickCounter > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
  $clickCount.textContent = 'Clicks: ' + clickCounter;
}

$hotButton.addEventListener('click', changeTemp);
