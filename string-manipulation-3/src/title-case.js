/* exported titleCase */

function titleCase(title) {
  const wordArr = title.toLowerCase().split('');
  const minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const titleWords = [];

  for (let i = 0; i < wordArr.length; i++) {
    let currentWord = '';
    for (let k = 0; k < wordArr[i].length; k++) {
      let currentLetter = wordArr[i][k];
      if (wordArr[i].includes('javascript')) {
        currentWord += 'JavaScript' + wordsArr[i].slice(10);
        break;
      } else if (wordArr[i] === 'api') {
        currentWord += 'API';
        break;
      } else if (i === 0 && k === 0) {
        currentWord += currentLetter.toUpperCase();
      } else if (wordArr[i][k - 1] === '-') {
        currentWord += currentLetter.toUpperCase();
      } else if (k === 0 && (wordArr[i - 1][wordArr[i - 1].length - 1] === ':')) {
        currentWord += currentLetter.toUpperCase();
      } else if (k === 0 && minorWords.indexOf(wordArr[i]) === -1) {
        currentWord += currentLetter.toUpperCase();
      } else {
        currentWord += currentLetter;
      }
    }
    titleWords.push(currentWord);
  }
  return titleWords.join(' ');
};
