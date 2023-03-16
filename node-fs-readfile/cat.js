import { readFile } from 'node:fs/promises';

const fileNames = process.argv.slice(2);
const promises = fileNames.map((fileName) => readFile(fileName, 'utf8'));

Promise.all(promises)
  .then((files) => {
    console.log(files.join('\n'));
  })
  .catch((error) => {
    console.error('error:', error);
    process.exit(1);
  });
