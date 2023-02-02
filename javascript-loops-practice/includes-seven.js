/* exported includesSeven */
/*
  - create a function named includesSeven with one parameter "array"
  - create a for loop to loop through the elements in the array
    - if the value at the index is strictly equal to the number 7
    return true
  - return false
*/

function includesSeven(array) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] === 7) {
      return true;
    }
  }
  return false;
}
