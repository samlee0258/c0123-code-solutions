import { readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'

export const create = () => {
  const data = readFileSync('data.json', 'utf8')
  const parsedData = JSON.parse(data)
  const text = process.argv[3]

  parsedData.notes[parsedData.nextId] = text;
  parsedData.nextId++;
  const stringifyData = JSON.stringify(parsedData, null, 2)

  writeFile('./data.json', stringifyData, 'utf8')
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
}
