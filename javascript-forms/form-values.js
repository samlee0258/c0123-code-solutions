var $form = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log('messageData:', messageData);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
