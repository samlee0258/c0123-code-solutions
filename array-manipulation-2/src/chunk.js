/* exported chunk */
/*
  - define a function named chunk with two parameters "array" and "size"
  - assign an empty array to a variable named chunkArr
  - create a for loop to loop through the given array
    - initialize the loop at index 0; check if index is less than array.length; final expression
      is index added to size and reassigned to index
        - using the slice method slice the array at the start of the index and end
          at the result of the expression index plus size
        - push the sliced array to chunkArr
  - return chunkArr
*/

function chunk(array, size) {
  var chunkArr = [];
  for (var index = 0; index < array.length; index += size) {
    chunkArr.push(array.slice(index, index + size));
  }
  return chunkArr;
}
