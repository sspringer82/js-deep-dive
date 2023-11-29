import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hallo Client');
});

const data = [
  {
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
    street: '42 Main st',
    city: 'New York',
    zip: '12345',
    country: 'USA',
  },
  {
    id: 2,
    firstname: 'Lisa',
    lastname: 'Müller',
    street: '42 Main st',
    city: 'New York',
    zip: '12345',
    country: 'USA',
  },
];

app.get('/addresses', (request, response) => {
  response.json(data);
});

app.get('/addresses/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  const address = data.find((item) => item.id === id);
  response.json(address);
});

app.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);
