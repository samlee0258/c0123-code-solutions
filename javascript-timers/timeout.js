function greeting() {
  var $message = document.querySelector('.message');
  $message.textContent = 'Hello There';
}

setTimeout(greeting, 2000);
