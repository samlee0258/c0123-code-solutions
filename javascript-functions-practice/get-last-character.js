/* exported getLastCharacter */
/*
  - create a function named getLastCharacter with one parameter "string"
  - using the .length method for the string,  get the length of the string and
  subtract it by 1 to get the last index of the string
  - with the last index of the string use the charAt method to get the last character
  of the string and assign it to a variable
  - return the value of the variable
*/

function getLastCharacter(string) {
  var lastCharacter = string.charAt(string.length - 1);
  return lastCharacter;
}
