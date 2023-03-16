import fs from 'node:fs/promises';

fs.readFile('dijkstra.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.error('there was an error:', error.message));
