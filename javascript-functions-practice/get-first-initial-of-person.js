/* exported getFirstInitialOfPerson */
/*
  - create a function named getFirstInitialOfPerson with one parameter "person"
  - access the firstName property of the person object using dot notation
  - use charAt method to get the first character of the string value of the firstName
  property and assign it to a variable
  - return the value of the variable
*/

function getFirstInitialOfPerson(person) {
  var firstInitial = person.firstName.charAt(0);
  return firstInitial;
}
