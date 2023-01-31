/* exported getLastElement */
/*
  - create a function named getLastElement with one parameter "array"
  - get the length of the array using the .length method and subtract it by 1 to get
  the last index of the array
  -assign the array at last index to a variable
  - return the value of the variable
*/

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
