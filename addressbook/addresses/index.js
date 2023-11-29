import express from 'express';
import { create, getAll, getOne, remove, update } from './controller.js';
// import controller from './controller.object.js';
// import Controller from './controller.class.js';
// const controller = new Controller();

const router = express.Router();

// router.get('/', controller.getAll.bind(controller));
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
