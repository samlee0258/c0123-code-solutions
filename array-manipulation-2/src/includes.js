/* exported includes */
/*
  - define a function named includes with two parameters "array" and "value"
  - create a for loop to loop through the given array
    - if the index at array is strictly equal to the value
      - return true
  - return false
*/

function includes(array, value) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return true;
    }
  }
  return false;
}
