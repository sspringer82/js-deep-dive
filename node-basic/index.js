import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hallo Client');
});

app.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);
