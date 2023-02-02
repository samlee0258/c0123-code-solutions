/* exported getIndexes */
/*
  - create a function named getIndexes with one parameter "array"
  - assign an empty array to a variable named indexes
  - create a for loop to loop through the array
    - push only the index number into the empty array
  - return output array
*/

function getIndexes(array) {
  var indexes = [];
  for (var index = 0; index < array.length; index++) {
    indexes.push(index);
  }
  return indexes;
}
