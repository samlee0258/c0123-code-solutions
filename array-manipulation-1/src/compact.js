/* exported compact */
/*
  - define a function named compact with one parameter "array"
  - assign an empty array to a variable named truthy
  - create a for loop to loop through the given array
    - if the array at the index is a truthy value
      - push into the truthy array
  - return output array
*/

function compact(array) {
  var truthy = [];
  for (var index = 0; index < array.length; index++) {
    if (array[index]) {
      truthy.push(array[index]);
    }
  }
  return truthy;
}
