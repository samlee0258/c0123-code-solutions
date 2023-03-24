import { readFileSync } from 'node:fs';
import express from 'express';
const port = 8080;
const app = express();

app.use(express.json());

const readFile = () => {
  const data = readFileSync('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

app.get('/api/notes', (req, res) => {
  const parsedData = readFile();
  const notesArr = [];
  for (const key in parsedData.notes) {
    notesArr.push((parsedData.notes[key]));
  }
  res.json(notesArr);
});

app.listen(port, () => console.log(`Listening on port: ${port}!`));
