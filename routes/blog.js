const express = require('express');

const postControllers = require('../controllers/post-controllers');

const router = express.Router();

router.get('/', postControllers.getHome);

router.get('/admin', postControllers.getAdmin);

router.post('/posts', postControllers.createPost);

router.get('/posts/:id/edit', postControllers.getSinglePost);

router.post('/posts/:id/edit', postControllers.updatePost);

router.post('/posts/:id/delete', postControllers.deletePost);

module.exports = router;
