/* exported initial */
/*
  - define a function named initial with one parameter "array"
  - assign an empty array to a variable named newArr
  - create a for loop to loop through the given array
    - if the index is not strictly equal to the last index
      then push the value to the newArr
  - return output array
*/

function initial(array) {
  var newArr = [];
  for (var index = 0; index < array.length; index++) {
    if (index !== (array.length - 1)) {
      newArr.push(array[index]);
    }
  }
  return newArr;
}
