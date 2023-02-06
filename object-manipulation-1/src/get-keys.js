/* exported getKeys */
/*
  - define a function named getKeys with one parameter "object"
  - assign an empty array to a variable named keys
  - create a for in loop to loop through the object
    - push the key to the output array
  - return output array
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
