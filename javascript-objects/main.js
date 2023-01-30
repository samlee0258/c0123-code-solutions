var student = {
  firstName: 'Sam',
  lastName: 'Lee',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Student';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Mazda',
  model: 'Hatchback',
  year: 2012
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Hammy',
  type: 'Hamster'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
