/* exported getWords */
/*
  - define a function named getWords with one parameter "string"
  - create a conditional statement
    - if the string is strictly equal to an empty '' return an empty array
    - else return array of words using the split method with the string space as
      the argument
*/

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}
