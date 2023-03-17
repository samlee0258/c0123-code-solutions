import { readFile } from 'node:fs/promises'
import { writeFile } from 'node:fs/promises'

const copiedNote = process.argv[2];

writeFile('copy-of-note.txt', copiedNote, 'utf-8')
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

readFile('copy-of-note.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
