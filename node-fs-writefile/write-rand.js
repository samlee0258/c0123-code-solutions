import { writeFile } from 'node:fs';

const randomNum = Math.random() + '\n';

writeFile('random.txt', randomNum, 'utf8' (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
});
