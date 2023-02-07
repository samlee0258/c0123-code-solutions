/* exported chunk */
/*
  - define a function named chunk with two parameters "array" and "size"
  - assign an empty array to a variable named chunkArr
  - create a for loop to loop through the given array
    - if the array.length is strictly equal to the size
      - push to chunkArr
  - return chunkArr
*/

function chunk(array, size) {
  var chunkArr = [];
  for (var index = 0; index < array.length; index += size) {
    chunkArr.push(array.slice(index, index + size));
  }
  return chunkArr;
}
