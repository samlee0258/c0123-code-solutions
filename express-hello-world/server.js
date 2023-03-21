import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method)
  res.send('Hello there!')
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
})
