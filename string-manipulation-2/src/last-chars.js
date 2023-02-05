/* exported lastChars */
/*
  - define a function named lastChars with two parameters "length" and "string"
  - assign an empty string to a variable named backwardString
  - create a for loop to loop through the given string starting from the last character
    - concatenate the index at string to the variable backwardString and reassign the result of
      that expression to the variable backwardString
  - using the slice method remove the characters from the variable backwardString
    and assign it to a variable named lastCharacters
  - assign an empty string to a variable named newString
  - create a for loop to loop through the string variable lastCharacters starting
    from the last character
    - conatenate the charAt at lastCharacters to newString and reassign the result of
      that expression to the variable newString
  - return newString
*/

function lastChars(length, string) {
  var backwardString = '';
  for (var index = string.length - 1; index >= 0; index--) {
    backwardString += string[index];
  }
  var lastCharacters = backwardString.slice(0, length);
  var newString = '';
  for (var charAt = lastCharacters.length - 1; charAt >= 0; charAt--) {
    newString += lastCharacters[charAt];
  }
  return newString;
}
