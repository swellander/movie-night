const router = require('express').Router();
const messageRoutes = require('./messages');

router.use('/messages', messageRoutes);

module.exports = router;