var $usersList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('value of xhr.status:', xhr.status);
  console.log('value of xhr.response:', xhr.response);
  var users = xhr.response;
  for (var index = 0; index < users.length; index++) {
    var user = users[index];
    var $li = document.createElement('li');
    $li.textContent = user.name;
    $usersList.appendChild($li);
  }
});
xhr.send();
