/* exported omit */
/*
  - looking at the two list of objects and arrays see what is not present in the array
    and put that property and value inside the empty object
  - could do the code below or use the includes method and if the keys.includes(prop)
    does not include the prop run the code

  - define a function named omit with two parameters "source" and "keys"
  - assign an empty object to a variable
  - create a for in loop to loop through the object
    - assign the value false to a variable isKey
    - create a for loop to loop through the keys array
      - if prop in source is strictly equal to keys at index
        - change value of isKey to true
    - if isKey is false
      - source at prop is assigned to omitObj at prop
  - return omitObj
*/

function omit(source, keys) {
  var omitObj = {};
  for (var prop in source) {
    var isKey = false;
    for (var index = 0; index < keys.length; index++) {
      if (prop === keys[index]) {
        isKey = true;
      }
    }
    if (isKey === false) {
      omitObj[prop] = source[prop];
    }
  }
  return omitObj;
}
