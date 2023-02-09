var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var index = 0; index < $tab.length; index++) {
      if (event.target === $tab[index]) {
        $tab[index].className = 'tab active';
      } else {
        $tab[index].className = 'tab';
      }
    }
  }
  var tabContent = event.target.getAttribute('data-view');
  for (var viewIndex = 0; viewIndex < $view.length; viewIndex++) {
    if (tabContent === $view[viewIndex].getAttribute('data-view')) {
      $view[viewIndex].className = 'view';
    } else {
      $view[viewIndex].className = 'view hidden';
    }
  }
});
