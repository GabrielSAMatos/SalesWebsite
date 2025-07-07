const UserController = require('../controllers/UserController');

const express = require('express');
const UsersRoutes = express.Router();

const userController = new UserController();

UsersRoutes.get('/users', userController.findAll);
UsersRoutes.post('/users', userController.create);
UsersRoutes.put('/users', userController.update);
UsersRoutes.delete('/users', userController.delete);

module.exports = UsersRoutes;