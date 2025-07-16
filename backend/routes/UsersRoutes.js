const UserController = require('../controllers/UserController');

const express = require('express');
const UsersRoutes = express.Router();

const userController = new UserController();

UsersRoutes.get('/users', userController.findAll);
UsersRoutes.get('/users/:id', userController.findByID);
UsersRoutes.post('/users', userController.create);
UsersRoutes.put('/users/:id', userController.update);
UsersRoutes.delete('/users/:id', userController.delete);

module.exports = UsersRoutes;