/* exported isLowerCased */
/*
  - define a function named isLowerCased with one parameter "word"
  - create a for loop to loop through the string
    - if one of the characters in the word is capitalized
      - return false
  - return true if every character in the string is lowercased
*/

function isLowerCased(word) {
  for (var index = 0; index < word.length; index++) {
    if (word[index] !== word.charAt(index).toLowerCase()) {
      return false;
    }
  }
  return true;
}
