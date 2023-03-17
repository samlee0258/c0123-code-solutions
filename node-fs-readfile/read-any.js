import fs from 'node:fs';

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
})
