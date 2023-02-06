/* exported capitalizeWords */
/*
  - define a function named capitalizeWords with one parameter "string"
  - lowercase all the characters in the string and assign it to string
  - using the split method seperate the words at the space and put them into an
    array assign them to a variable named words
  - assign an empty array to a variable named arr
  - create a for loop to loop through the words array
    - at the index in the words array get the first character of the string and
      uppercase it then assign to a variable named letter
    - concatenate the variable letter with the rest of the removed characters from
      the string at the index of the words array
  - join the elements in the "arr" array with a space in between them and return
    it out of the function
*/

function capitalizeWords(string) {
  string = string.toLowerCase();
  var words = string.split(' ');
  var arr = [];
  for (var index = 0; index < words.length; index++) {
    var letter = words[index].charAt(0).toUpperCase();
    arr.push(letter + words[index].slice(1));
  }
  return arr.join(' ');
}
