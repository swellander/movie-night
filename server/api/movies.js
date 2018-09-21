const { Movie } = require('../db/models');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  Movie.findAll()
    .then(movies => res.json(movies))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.json(movie))
    .catch(next);
})

module.exports = router;