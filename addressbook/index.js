import express from 'express';
import addressRouter from './addresses/index.js';

const app = express();

app.use(express.json());

app.use('/addresses', addressRouter);

app.get('/', (request, response) => {
  response.send('Hallo Client');
});

app.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);
