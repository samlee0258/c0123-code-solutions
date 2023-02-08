/* exported take */
/*
  - define a function named take with two parameters "array" and "count"
  - assign an empty array to a variable named newArr
  - create a for loop to loop through the given array
    - start at 0; go through the array till the count; increment by 1
    - if array.length is less than the count
      - return an empty array
    - else
      - push the element at index number to newArr
  - return newArr
*/

function take(array, count) {
  var newArr = [];
  for (var index = 0; index < count; index++) {
    if (array.length < count) {
      return [];
    } else {
      newArr.push(array[index]);
    }
  }
  return newArr;
}
