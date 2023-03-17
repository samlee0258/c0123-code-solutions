import { writeFile } from 'node:fs/promises'

const note = process.argv[2];

writeFile('note.txt', note + '\n', 'utf-8')
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
