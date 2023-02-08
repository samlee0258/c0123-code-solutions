var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');
var $form = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {
    $name: $name.value,
    $email: $email.value,
    $message: $message.value
  };
  console.log('messageData:', messageData);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
