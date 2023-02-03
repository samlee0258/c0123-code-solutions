/* exported toObject */
/*
  - define a function named toObject with one parameter "keyValuePair"
  - assign an empty object to a variable named newObject
  - assign keyValuePair at index 0 to a variable named key
  - assign keyValuePair at index 1 to a variable named value
  - assign the value to the object at key
  - return object
*/

function toObject(keyValuePair) {
  var newObject = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  newObject[key] = value;
  return newObject;
}
