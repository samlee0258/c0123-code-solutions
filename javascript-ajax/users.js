var $usersList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('value of xhr.status:', xhr.status);
  console.log('value of xhr.response:', xhr.response);
  for (var key in xhr.response) {
    var $li = document.createElement('li');
    $li.textContent = xhr.response[key].name;
    $usersList.appendChild($li);
  }
});
xhr.send();
