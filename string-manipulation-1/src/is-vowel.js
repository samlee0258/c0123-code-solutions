/* exported isVowel */
/*
  - define a function named isVowel with one parameter "character"
  - assign an array of vowels both lowercased and uppercased to a variable name vowels
  - create a for loop to loop through the array of vowels
    - if the vowel at the index is strictly equal to the character
      - return true
  - else return false
*/

function isVowel(character) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var index = 0; index < vowels.length; index++) {
    if (vowels[index] === character) {
      return true;
    }
  }
  return false;
}
