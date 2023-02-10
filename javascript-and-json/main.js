var library = [
  {
    isbn: '1234567891',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '1234567892',
    title: 'Pinocchio',
    author: 'Carlo Collodi'
  },
  {
    isbn: '1234567893',
    title: 'Catcher in the Rye',
    author: 'J.D. Salinger'
  }
];

console.log('value of library:', library);
console.log('typeof library:', typeof library);

var libraryJSON = JSON.stringify(library);

console.log('libraryJSON:', libraryJSON);
console.log('typeof libraryJSON', typeof libraryJSON);

var studentJSON = '{ "numberId": "12345667890", "name": "Mike Wazowski" }';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var studentObj = JSON.parse(studentJSON);

console.log('studentObj:', studentObj);
console.log('typeof studentObj:', typeof studentObj);
