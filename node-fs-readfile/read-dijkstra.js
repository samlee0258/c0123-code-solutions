import fs from 'node:fs';

fs.readFile('dijkstra.txt', 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
