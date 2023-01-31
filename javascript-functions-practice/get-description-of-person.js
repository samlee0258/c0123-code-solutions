/* exported getDescriptionOfPerson */
/*
  - create a function named getDescriptionOfPerson with one parameter "person"
  - using dot notation access the person objects name, occupation, and birthPlace
  and assign them to variables
  - assign the concatenated description of the person to a variable
  - return the value of the variable
*/

function getDescriptionOfPerson(person) {
  var name = person.name;
  var occupation = person.occupation;
  var birthPlace = person.birthPlace;
  var description = name + ' is a ' + occupation + ' from ' + birthPlace + '.';
  return description;
}
