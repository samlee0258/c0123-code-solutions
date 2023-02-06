/* exported getValues */
/*
  - define a function named getValues with one parameter "object"
  - assign and empty array to a variable named values
  - create a for in loop to loop through the object
    - push the value at the object at key into the output array
  - return output array
*/

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
