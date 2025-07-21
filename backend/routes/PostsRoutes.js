const PostsController = require('../controllers/PostsController');

const express = require('express');
const PostsRoutes = express.Router();

const postsController = new PostsController();

PostsRoutes.get('/posts', postsController.findAll);
PostsRoutes.get('/posts/:id', postsController.findByID);
PostsRoutes.post('/posts', postsController.create);
PostsRoutes.put('/posts/:id', postsController.update);
PostsRoutes.delete('/posts/:id', postsController.delete);

module.exports = PostsRoutes;