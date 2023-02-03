/* exported reverseWord */
/*
  - define a function named reverseWord with one parameter "word"
  - assign an empty string to a variable named reversedWord
  - create a for loop to loop through the given string
    - start from the last character of the string using word.length - 1
    - if index is greater than or equal to 0 run the loop again
    - add the character at index to the empty string and reassign the string to
      the variable
  - return reversedWord
*/

function reverseWord(word) {
  var reversedWord = '';
  for (var index = word.length; index >= 0; index--) {
    reversedWord += word.charAt(index);
  }
  return reversedWord;
}
