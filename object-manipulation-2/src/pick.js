/* exported pick */
/*
  - define a function named pick with two parameters "source" and "keys"
  - assign an empty object to a variable
  - create a for loop to loop through the keys array
    - assign the index at keys to a variable named key
    - if the key at source is not undefined
      - assign key at source to key at presentObj
  - return presentObj
*/

function pick(source, keys) {
  var presentObj = {};
  for (var index = 0; index < keys.length; index++) {
    var key = keys[index];
    if (source[key] !== undefined) {
      presentObj[key] = source[key];
    }
  }
  return presentObj;
}
