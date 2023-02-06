/* exported numVowels */
/*
  - define a function named numVowels with one parameter "string"
  - assign an array with all the vowels into a variable named vowelList
  - assign the number 0 to a variable named currentCount
  - create a for loop to loop through the string
    - create a for loop to loop through the vowelList
      - if the index at the string is strictly equal to the index at the vowelList
        - add to the currentCount and reassign to currentCount
  - return currentCount
*/

function numVowels(string) {
  var vowelList = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  var currentCount = 0;
  for (var charAt = 0; charAt < string.length; charAt++) {
    for (var index = 0; index < vowelList.length; index++) {
      if (string[charAt] === vowelList[index]) {
        currentCount += 1;
      }
    }
  }
  return currentCount;
}
