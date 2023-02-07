var $body = document.querySelector('body');
var $button = document.querySelector('button');

$button.addEventListener('click', function (e) {
  if ($button.className === 'on-button') {
    $body.className = 'off';
    $button.className = 'off-button';
  } else if ($button.className === 'off-button') {
    $body.className = 'on';
    $button.className = 'on-button';
  }
});
