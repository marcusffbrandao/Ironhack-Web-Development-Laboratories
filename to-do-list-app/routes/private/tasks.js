const express = require('express');
const Task = require('../../models/Tasks');

const router = express.Router();

router.post('/task/create', (req, res) => {
  const newTask = new Task(req.body);
  newTask.save()
    .then(() => {
      console.log('Task Criada com Sucesso');
      res.redirect(`/event/${req.body.eventID}`);
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/task/edit/:taskId', async (req, res) => {
  const task = await Task.findById(req.params.taskId);
  res.render('private/task/task-edit-view', task);
});

module.exports = router;
