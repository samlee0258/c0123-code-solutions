/* exported getLastChar */
/*
  - define a function named getLastChar with one parameter "string"
  - using the charAt method get the result of the expression string.length - 1 to
    get the last character of the string and assign it to a variable named lastChar
  - return output
*/

function getLastChar(string) {
  var lastChar = string.charAt(string.length - 1);
  return lastChar;
}
