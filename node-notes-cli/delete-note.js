import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

export const remove = (id) => {
  const data = readFileSync('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  const numberProp = process.argv[3];

  if (parsedData.notes[numberProp]) {
    delete parsedData.notes[numberProp];
  } else {
    return console.error('ID does not exist!');
  }

  const stringifyData = JSON.stringify(parsedData, null, 2);
  writeFile('./data.json', stringifyData, 'utf8')
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};
