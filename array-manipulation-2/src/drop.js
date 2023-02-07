/* exported drop */
/*
  - define a function named drop with two parameters "array" and "count"
  - assign an empty array to a variable named droppedArr
  - create a for loop to loop through the given array
    - if index number is greater than or equal to count
      - push the element at the index number into droppedArr
  - return droppedArr
*/

function drop(array, count) {
  var droppedArr = [];
  for (var index = 0; index < array.length; index++) {
    if (index >= count) {
      droppedArr.push(array[index]);
    }
  }
  return droppedArr;
}
