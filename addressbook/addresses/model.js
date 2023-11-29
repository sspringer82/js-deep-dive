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

export const getAll = () => data;

export const getOne = (id) => {
  const address = data.find((item) => item.id === id);
  return address;
};

export const create = (newAddress) => {
  const id = data.length + 1;

  const createdAddress = {
    ...newAddress,
    id,
  };

  data.push(createdAddress);

  return createdAddress;
};

export const update = (id, updatedAddress) => {
  const index = data.findIndex((address) => address.id === id);

  data[index] = updatedAddress;

  return updatedAddress;
};

export const remove = (id) => {
  const index = data.findIndex((address) => address.id === id);

  data.splice(index, 1);
};
