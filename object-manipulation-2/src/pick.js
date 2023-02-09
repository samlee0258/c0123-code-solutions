/* exported pick */
/*
  - define a function named pick with two parameters "source" and "keys"
  - assign an empty object to a variable
  - create a for in loop to loop through the object
    - create a for loop to loop through the keys array
      - if the key in object is strictly equal to the index in array push the key
        and the value into the empty object
  - return output object
*/

function pick(source, keys) {
  var presentKeys = {};
  for (var key in source) {
    for (var index = 0; index < keys.length; index++) {
      if (key === keys[index]) {
        presentKeys = key;
      }
    }
  }
  return presentKeys;
}
