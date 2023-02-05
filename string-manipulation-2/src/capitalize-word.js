/* exported capitalizeWord */
/*
  - define a function named capitalizeWord with one parameter "word"
  - lowercase all characters in the string using toLowerCase method and reassign to
    word
  - if word is strictly equal to 'javascript'
    - return 'JavaScript'
  - else
    - using the charAt method and toUpperCase method, uppercase the character at
      index 0
    - slice the string starting from index 1
    - concatenate the uppercased character with the sliced string
    - return word

*/

function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
