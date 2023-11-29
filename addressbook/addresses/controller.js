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
