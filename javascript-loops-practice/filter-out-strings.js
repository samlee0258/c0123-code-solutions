/* exported filterOutStrings */
/*
  - create a function named filterOutStrings with one parameter "values"
  - assign an empty array to a variable name filteredArr
  - create a for loop to loop through the "values" array
    - if typeof value at index is not strictly equal to a 'string' then push
    into the empty array
  - return output array
*/

function filterOutStrings(values) {
  var filteredArr = [];
  for (var index = 0; index < values.length; index++) {
    if (typeof values[index] !== 'string') {
      filteredArr.push(values[index]);
    }
  }
  return filteredArr;
}
