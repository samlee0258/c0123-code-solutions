/* exported countdown */
/*
  - create a function named countdown with one parameter "number"
  - assign an empty array to a variable
  - create a for loop to loop from the initial number to 0
    - push the numbers into the empty array
  - return output array
*/

function countdown(number) {
  var countdownArr = [];
  for (var index = number; index >= 0; index--) {
    countdownArr.push(index);
  }
  return countdownArr;
}
