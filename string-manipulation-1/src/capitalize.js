/* exported capitalize */
/*
  - define a function named capitalize with one parameter "word"
  - lowercase all the characters in the string using the toLowerCase method
  - using the charAt method get the first character of the word and uppercase it
    using the toUpperCase method
  - concatenate the uppercased character with the rest of the lowercased character
    using the "+" operator and the slice method
  - return output
*/

function capitalize(word) {
  var newWord = word.charAt().toUpperCase() + word.slice(1, word.length).toLowerCase();
  return newWord;
}
