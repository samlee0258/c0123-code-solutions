import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

export const update = () => {
  const data = readFileSync('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  const numberProp = process.argv[3];
  const text = process.argv[4];

  if (parsedData.notes[numberProp]) {
    parsedData.notes[numberProp] = text;
  } else {
    console.error('ID does not exist!');
  }

  const stringifyData = JSON.stringify(parsedData, null, 2);
  writeFile('./data.json', stringifyData, 'utf8')
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};
