import { writeFile } from 'node:fs/promises';

const randomNum = Math.random() + '\n';

writeFile('random.txt', randomNum, 'utf8')
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
