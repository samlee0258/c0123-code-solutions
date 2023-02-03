/* exported reverse */
/*
  - define a function named reverse with one parameter "array"
  - assign an empty array to a variable named reversedArr
  - create a for loop to loop through the given array starting from the last index
    going down the array
    - push the elements into reversedArr
  - return output array
*/

function reverse(array) {
  var reversedArr = [];
  for (var index = array.length - 1; index >= 0; index--) {
    reversedArr.push(array[index]);
  }
  return reversedArr;
}
