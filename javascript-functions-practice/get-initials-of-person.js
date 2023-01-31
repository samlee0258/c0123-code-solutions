/* exported getInitialsOfPerson */
/*
  - create a function named getInitialsOfPerson with one parameter "person"
  - access the string values of firstName and lastName property of the person object
  using dot notation
  - using the charAt method of the string get the first character of both lastName and
  firstName string and concatenate them together
  - assign the concatenated string to a variable
  - return value of the variable
*/

function getInitialsOfPerson(person) {
  var firstNameInitial = person.firstName.charAt(0);
  var lastNameInitial = person.lastName.charAt(0);
  var firstAndLastInitial = firstNameInitial + lastNameInitial;
  return firstAndLastInitial;
}
