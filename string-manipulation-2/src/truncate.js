/* exported truncate */
/*
  - define a function named truncate with two parameters "length" and "string"
  - using the slice method cut the string from index 0 to the "length" and assign
    to the variable newString
  - concatenate newString with an ellipsis at the end and reassign the string to
    the variable newString
  - return newString
*/

function truncate(length, string) {
  var newString = string.slice(0, length);
  newString += '...';
  return newString;
}
