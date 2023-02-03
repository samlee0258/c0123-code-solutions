/* exported tail */
/*
  - define a function named tail with one parameter "array"
  - assign an empty string to a variable named newArr
  - create a for loop to loop through the given array
    - start the loop from the first index
      - push the array at index into the newArr
  - return output array
*/

function tail(array) {
  var newArr = [];
  for (var index = 1; index < array.length; index++) {
    newArr.push(array[index]);
  }
  return newArr;
}
