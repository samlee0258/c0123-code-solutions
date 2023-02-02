/* exported getStudentNames */
/*
  - create a function named getStudentNames with one parameter "students"
  - assign an empty array to a variable named studentNames
  - create a for loop to loop through the students array
    - push the name at the index of the student object
  - return the output array
*/

function getStudentNames(students) {
  var studentNames = [];
  for (var index = 0; index < students.length; index++) {
    studentNames.push(students[index].name);
  }
  return studentNames;
}
