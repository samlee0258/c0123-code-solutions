var $message = document.querySelector('.message');

function greeting() {
  $message.textContent = 'Hello There';
}

setTimeout(greeting, 2000);
