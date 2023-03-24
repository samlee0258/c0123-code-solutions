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

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log('isInteger:', !Number.isInteger(id));
  if (id < 0 || !Number.isInteger(id)) {
    return res.status(400).json({ error: 'Must be a positive integer!' });
  }
  const parsedData = readFile();
  console.log('parsedData:', parsedData);
  if (!parsedData.notes[id]) {
    return res.status(404).json({ error: `Note ${id} does not exist!` });
  }
  res.status(200).json(parsedData.notes[id]);
});

app.get('/api/notes', (req, res) => {
  const parsedData = readFile();
  const notesArr = [];
  for (const key in parsedData.notes) {
    notesArr.push((parsedData.notes[key]));
  }
  res.json(notesArr);
});

app.listen(port, () => console.log(`Listening on port: ${port}!`));
