/* exported isAnagram */
/*
  - put strings into objects to see if the letter values are the same
  - remove spaces from both strings
  - loop through both strings and compare them
  - if the characters exist in both strings return true
*/

function isAnagram(firstString, secondString) {
  firstString = firstString.split(' ').join('');
  secondString = secondString.split(' ').join('');
  var equal = null;
  for (var i = 0; i < firstString.length; i++) {
    for (var index = 0; index < secondString.length; index++) {
      if (firstString[i] !== secondString[index]) {
        equal = false;
      } else {
        equal = true;
      }
    }
  }
  return equal;
}
