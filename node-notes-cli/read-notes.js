import { readFileSync } from 'node:fs';
// assert:
// import data from './data.json' assert {type:'json'}
// console.log(data.notes)

export const read = () => {
  const data = readFileSync('data.json', 'utf8');
  const parsedData = JSON.parse(data).notes;
  for (const key in parsedData) {
    const read = `${key}: ${parsedData[key]}`;
    console.log(read);
  }
};
