const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('routes are working')
})

module.exports = router;