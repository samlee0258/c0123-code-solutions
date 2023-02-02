/* exported filterOutNulls */
/*
  - create a function named filterOutNulls with one parameter "values"
  - assign an empty array to a variable
  - create a for loop to loop through the "values" array
    - if element at index of the array is not strictly equal to null
    push index at values to empty array
  - return output array
*/

function filterOutNulls(values) {
  var filteredArr = [];
  for (var index = 0; index < values.length; index++) {
    if (values[index] !== null) {
      filteredArr.push(values[index]);
    }
  }
  return filteredArr;
}
