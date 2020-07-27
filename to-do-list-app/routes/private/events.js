const express = require('express');
const Event = require('../../models/Events');
const Task = require('../../models/Tasks');

const router = express.Router();

router.get('/events', async (req, res, next) => {
  const events = await Event.find();
  res.render('private/event/my-event-view', { events });
});

router.get('/events/create', (req, res) => {
  res.render('private/event/create-event');
});

router.post('/events/create', (req, res) => {
  // const { name, deadLine, description, imageUrl } = req.body;
  const newEvent = new Event(req.body);
  newEvent.save()
    .then(() => {
      console.log('Evento Criado com Sucesso');
      res.redirect('/');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

router.get('/event/:eventID', async (req, res) => {
  const { eventID } = req.params;
  const event = await Event.findById(eventID);
  const tasks = await Task.find({ eventID });
  tasks.sort((a, b) => a.priority - b.priority);
  console.log(tasks)

  res.render('private/event/event-view', { event, tasks });
});

module.exports = router;
