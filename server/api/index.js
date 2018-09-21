const router = require('express').Router();

router.use('/messages', require('./messages'));
router.use('/movies', require('./movies'));

module.exports = router;