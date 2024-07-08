const { getAll, create, getOne, remove, update } = require('../controllers/credencial.controller');
const express = require('express');

const credencialRouter = express.Router();

credencialRouter.route('/')
    .get(getAll)
    .post(create);

credencialRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = credencialRouter;