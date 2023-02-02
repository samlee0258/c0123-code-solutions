/* exported findIndex */
/*
  - create a function named findIndex with two parameters "array" and "value"
  - create a for loop to loop through the array
    - if the value is strictly equal to the value at the index of the array then
    return the index number where the value is present in the array
  - else return -1
*/

function findIndex(array, value) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
