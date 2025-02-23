const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async (req, res) => res.render('todo', { tasks: await Task.find() }));
router.post('/', async (req, res) => {
  await new Task({ text: req.body.text }).save();
  res.redirect('/todo');
});
router.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/todo');
});

module.exports = router;
