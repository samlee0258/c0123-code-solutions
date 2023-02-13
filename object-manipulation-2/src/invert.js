/* exported invert */
/*
  - take the object and switch the properties with the values, so that the property
    is the value and the value is the property

  - define a function named invert with one parameter "source"
  - assign an empty object to a variable
  - create a for in loop to loop through the object
    - assign the source at key to the variable newProp
    - assign key to source at key
    - assign the new source at key to invertedObj at newProp
  - return invertedObj
*/

function invert(source) {
  var invertedObj = {};
  for (var key in source) {
    var newProp = source[key];
    source[key] = key;
    invertedObj[newProp] = source[key];
  }
  return invertedObj;
}
