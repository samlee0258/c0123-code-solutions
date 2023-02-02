/* exported sumAll */
/*
  - create a function named sumAll with one parameter "numbers"
  - assign 0 to a variable named currentNumber
  - create for loop to loop through the array of numbers
    - add number at index of i to the currentNumber
  - return currentNumber
*/

function sumAll(numbers) {
  var currentNumber = 0;
  for (var index = 0; index < numbers.length; index++) {
    currentNumber += numbers[index];
  }
  return currentNumber;
}
