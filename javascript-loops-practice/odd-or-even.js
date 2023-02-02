/* exported oddOrEven */
/*
  - create a function named oddOrEven with one parameter "numbers"
  - assign an empty array to a variable named oddOrEvenArr
  - create a for loop to loop through the array
    - if the array at index is divisible by 2 and strictly equals 0
      - push the string "even" to the empty array
    - else push the string "odd" to the empty array
  - return output array
*/

function oddOrEven(numbers) {
  var oddOrEvenArr = [];
  for (var index = 0; index < numbers.length; index++) {
    if ((numbers[index] % 2) === 0) {
      oddOrEvenArr.push('even');
    } else {
      oddOrEvenArr.push('odd');
    }
  }
  return oddOrEvenArr;
}
