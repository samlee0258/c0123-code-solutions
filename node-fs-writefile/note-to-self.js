import { writeFile } from 'node:fs'

const note = process.argv[2];

writeFile('note.txt', note + '\n', 'utf-8', (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
})
