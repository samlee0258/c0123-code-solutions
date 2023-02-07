var $openModal = document.querySelector('.open-modal');
var $modalContainer = document.querySelector('.modal-container');
var $closeModal = document.querySelector('.close-modal');

$openModal.addEventListener('click', function (e) {
  $modalContainer.className = 'modal-container';
});

$closeModal.addEventListener('click', function (e) {
  $modalContainer.className = 'modal-container hidden';
});
