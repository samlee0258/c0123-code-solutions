/* exported addSuffixToAll */
/*
  - create a function named addSuffixToAll with two parameters "words" and "suffix"
  - assign an empty array to a variable named suffixedWords
  - create a for loop to loop through the array of words
    - concatenate the word at the index with the suffix and assign to a variable
    named newWord
    - push newWord into the empty array
  - return output array
*/

function addSuffixToAll(words, suffix) {
  var suffixedWords = [];
  for (var index = 0; index < words.length; index++) {
    var newWord = words[index] + suffix;
    suffixedWords.push(newWord);
  }
  return suffixedWords;
}
