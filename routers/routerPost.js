const postController = require('../controllers/postController');
const express = require('express');
const router = express.router();

//Index
router.get('/', controller.index);

//Show
router.get('/:id', controller.show);

//Store
router.post('/', controller.store);

//Update
router.put('/:id', controller.update);

//Modify
router.patch('/:id', controller.modify);

//Destroy
router.delete('/:id', controller.destroy);

module.exports = router;