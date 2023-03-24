import { readFileSync } from 'node:fs';
// import { writeFile } from 'node:fs/promises';
import express from 'express';

const port = 8080;
const app = express();

app.use(express.json());

const readFile = () => {
  const data = readFileSync('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

// Get individual note:
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
// Get all notes:
app.get('/api/notes', (req, res) => {
  const parsedData = readFile();
  const notesArr = [];
  for (const key in parsedData.notes) {
    notesArr.push((parsedData.notes[key]));
  }
  res.json(notesArr);
});

// Add new note:
// POST to /api/notes
// req.body is whatever text comes after the endpoint and is turned into an object
// req.body.content = whatever you type if you do (content="")
// 3. write a writeFile function similar to readFile function as a promise
//   - if succeeds post json
//   - else show 500

// Delete note:
// step 3 and 4 can be a Promise using await .then would be the success and .catch would be the error.
// step 1 and 2 is similar to getting individual note steps 1 and 2

// Update note:
// PUT request to endpoint /api/notes/:id
// if not positive integer or no req.body content property throw error 400
// if id and content doesnt match note id throw error 404
// step 3 and 4 can be a Promise using await similar to Delete
app.listen(port, () => console.log(`Listening on port: ${port}!`));
