/* exported last */
/*
  - define a function named last with one parameter "array"
  - get the length of the given array using the .length method and subtract it
    by 1
  - assign the array at index retrieved from the result of the expression to a
    variable named lastIndex
  -return output
*/

function last(array) {
  var lastIndex = array[array.length - 1];
  return lastIndex;
}
