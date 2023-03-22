import { data } from './data.json';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in data.notes) {
    notesArr.push((data[key]));
  }
  res.json(notesArr);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
