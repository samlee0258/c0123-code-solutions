function convertMinutestoSeconds(minutes) {
  var product = minutes * 60;
  return product;
}
var convertMinutestoSecondsResults = convertMinutestoSeconds(5);
console.log('convertMinutestoSecondsResults:', convertMinutestoSecondsResults);

function greet(name) {
  var firstName = name;
  return 'Hey, ' + firstName;
}
var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array[array.length - 1];
  return lastIndex;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
