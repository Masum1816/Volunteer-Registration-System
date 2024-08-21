
const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/Controllers');

router.get('/', controllers.DefaultController);
router.post('/addTodo', controllers.AddTodoController);
router.get('/editTodo/:id', controllers.EditTodoController)
router.post('/updateTodo', controllers.UpdateTodoController);
router.get('/deleteTodo/:id', controllers.DeleteTodoController);

module.exports = router;








