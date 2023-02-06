/* exported ransomCase */
/*
  - define a function named ransomCase with one parameter "string"
  - assign an empty string to a variable named newString
  - create a for loop to loop through the string
    - if the index modulo 2 is not strictly equal to 0
      - uppercase the character index at the string and concatenate it with newString
        then reassign it to newString
    - else
      - lowercase the character index at the string and concatenate it with newString
        then reassign it to newString
  - return newString
*/

function ransomCase(string) {
  var newString = '';
  for (var index = 0; index < string.length; index++) {
    if ((index % 2) !== 0) {
      newString += string[index].toUpperCase();
    } else {
      newString += string[index].toLowerCase();
    }
  }
  return newString;
}
