/* exported swapChars */
/*
  - define a function named swapChars with three parameters "firstIndex", "secondIndex", and "string"
  - convert the string into an array
  - create a variable assigned to the string at firstIndex
  - assign the firstIndex to the secondIndex
  - assign the secondIndex to the variable
  - return string with swapped indexes using the join() method.
*/

function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var swap = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = swap;
  return string.join('');
}
