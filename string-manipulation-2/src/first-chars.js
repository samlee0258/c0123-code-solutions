/* exported firstChars */
/*
  - define a function named firstChars with two parameters "length" and "string"
  - using the slice method on the string parameter take the characters from 0 to
    the length parameter and assign it to a variable named newString
  - return newString
*/

function firstChars(length, string) {
  var newString = string.slice(0, length);
  return newString;
}
