import express from 'express';

const app = express();

app.use(express.json());

const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
