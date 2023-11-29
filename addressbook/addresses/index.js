import express from 'express';
import { getAll } from './controller.js';

const router = express.Router();

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

router.get('/', getAll);

router.get('/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  const address = data.find((item) => item.id === id);
  response.json(address);
});

router.post('/', (request, response) => {
  const id = data.length + 1;

  const newAddress = {
    ...request.body,
    id,
  };

  data.push(newAddress);

  response.json(newAddress);
});

router.put('/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  const updatedAddress = request.body;

  const index = data.findIndex((address) => address.id === id);

  data[index] = updatedAddress;

  response.json(updatedAddress);
});

router.delete('/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);

  const index = data.findIndex((address) => address.id === id);

  data.splice(index, 1);

  response.status(204).send();
});

export default router;
