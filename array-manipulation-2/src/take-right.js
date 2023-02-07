/* exported takeRight */
/*
  - define a function named takeRight with two parameters "array" and "count"
  - assign an empty array to a variable named reversedArr
  - create a for loop to loop through the given array
    - starting from the last index of the array push the array at i to reversedArr
  - assign an empty array to a variable named rightArr
  - create a for loop to loop through reversedArr
    - if index is less than count
      - push the index at reversedArr to rightArr
  - return rightArr
*/

function takeRight(array, count) {
  var reversedArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  var rightArr = [];
  for (var index = reversedArr.length - 1; index >= 0; index--) {
    if (index < count) {
      rightArr.push(reversedArr[index]);
    }
  }
  return rightArr;
}
