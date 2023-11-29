import {
  getAll as modelGetAll,
  getOne as modelGetOne,
  create as modelCreate,
  update as modelUpdate,
  remove as modelRemove,
} from './model.js';

export const getAll = (request, response) => {
  response.json(modelGetAll());
};

export const getOne = (request, response) => {
  const id = parseInt(request.params.id, 10);

  const address = modelGetOne(id);

  response.json(address);
};

export const create = (request, response) => {
  const newAddress = modelCreate(request.body);
  response.json(newAddress);
};

export const update = (request, response) => {
  const id = parseInt(request.params.id, 10);

  const updatedAddress = modelUpdate(id, request.body);

  response.json(updatedAddress);
};

export const remove = (request, response) => {
  const id = parseInt(request.params.id, 10);

  modelRemove(id);

  response.status(204).send();
};
