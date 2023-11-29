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

export const getAll = (request, response) => {
  response.json(data);
};

export const getOne = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const address = data.find((item) => item.id === id);
  response.json(address);
};

export const create = (request, response) => {
  const id = data.length + 1;

  const newAddress = {
    ...request.body,
    id,
  };

  data.push(newAddress);

  response.json(newAddress);
};

export const update = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const updatedAddress = request.body;

  const index = data.findIndex((address) => address.id === id);

  data[index] = updatedAddress;

  response.json(updatedAddress);
};

export const remove = (request, response) => {
  const id = parseInt(request.params.id, 10);

  const index = data.findIndex((address) => address.id === id);

  data.splice(index, 1);

  response.status(204).send();
};
