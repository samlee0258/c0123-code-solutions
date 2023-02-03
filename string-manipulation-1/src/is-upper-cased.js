/* exported isUpperCased */
/*
  - define a function named isUpperCased with one parameter "word"
  - create a for loop to loop through the string
    - if one of the characters in the word is not capitalized
      - return false
  - return true if every character in the string is uppercased
*/

function isUpperCased(word) {
  for (var index = 0; index < word.length; index++) {
    if (word[index] !== word.charAt(index).toUpperCase()) {
      return false;
    }
  }
  return true;
}
