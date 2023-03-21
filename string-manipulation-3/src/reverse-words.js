/* exported reverseWords */

function reverseWords(string) {
  const splitStr = string.split(' ');
  const reversedStr = [];
  for (let i = 0; i < splitStr.length; i++) {
    reversedStr.push(splitStr[i].split('').reverse().join(''));
  }
  return reversedStr.join(' ');
}
