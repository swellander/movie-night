const router = require('express').Router();
const { Message } = require('../db').models;

router.get('/', (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next)
});

router.post('/', (req, res, next) => {
  //TODO: connect new message with its author
  Message.create(req.body)
    .then(newMessage => res.json(newMessage))
    .catch(() => res.send(req.body))
});

module.exports = router;