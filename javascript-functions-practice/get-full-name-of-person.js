/* exported getFullNameOfPerson */
/*
  - create a function named getFullNameOfPerson with one parameter "person"
  - get the firstName and lastName of the person object using dot notation and
  concatenate the two values together and assign it a variable
  - return the value of the variable
*/

function getFullNameOfPerson(person) {
  var fullName = person.firstName + ' ' + person.lastName;
  return fullName;
}
