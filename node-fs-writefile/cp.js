import { readFile } from 'node:fs/promises'
import { writeFile } from 'node:fs/promises'

const copiedNote = process.argv[2];
const destination = process.argv[3];

readFile(copiedNote)
  .then((data) => writeFile(destination, data))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
