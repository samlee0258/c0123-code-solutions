/* exported isAnagram */
/*
  - put strings into objects to see if the letter values are the same
  - remove spaces from both strings
  - loop through both strings and compare them
  - if the characters exist in both strings return true
*/

function isAnagram(firstString, secondString) {
  const firstStrObj = {};
  const secondStrObj = {};
  let value = false;

  for (let i = 0; i < firstString.length; i++) {
    firstStrObj[firstString[i]] = i;
    for (let k = 0; k < secondString.length; k++) {
      secondStrObj[secondString[k]] = k;
      if (Object.values(firstStrObj)[i] === Object.values(secondStrObj)[k]) {
        value = true;
      } else {
        value = false;
      }
    }
  }
  return value;
}
