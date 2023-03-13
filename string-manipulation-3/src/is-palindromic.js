/* exported isPalindromic */
/*
  - assign an empty string to a variable
  - removing spacing in string
  - take string and reverse the order of the characters and join them together
  - assign reversed string to the variable
  - compare the reversed string to the string
  - if they not strictly equal to each other return false
  - otherwise return true
*/

function isPalindromic(string) {
  var reversedStr = '';
  string = string.split(' ').join('');
  for (var index = string.length - 1; index >= 0; index--) {
    reversedStr += string[index];
  }
  if (reversedStr !== string) {
    return false;
  }
  return true;
}
