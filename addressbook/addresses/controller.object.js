export default {
  data: [
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
  ],

  getAll(request, response) {
    console.log(this);
    response.json(this.data);
  },

  getOne(request, response) {
    const id = parseInt(request.params.id, 10);
    const address = this.data.find((item) => item.id === id);
    response.json(address);
  },

  create(request, response) {
    const id = this.data.length + 1;

    const newAddress = {
      ...request.body,
      id,
    };

    this.data.push(newAddress);

    response.json(newAddress);
  },

  update(request, response) {
    const id = parseInt(request.params.id, 10);
    const updatedAddress = request.body;

    const index = this.data.findIndex((address) => address.id === id);

    this.data[index] = updatedAddress;

    response.json(updatedAddress);
  },

  remove(request, response) {
    const id = parseInt(request.params.id, 10);

    const index = this.data.findIndex((address) => address.id === id);

    this.data.splice(index, 1);

    response.status(204).send();
  },
};
