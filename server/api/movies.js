const { Movie } = require('../db/models');
const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  Movie.findAll()
    .then(movies => res.json(movies))
    .catch(next);
});

router.post('/', (req, res, next) => {
  //QUESTION: where should I put this external api call?
  axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${req.body.movieTitle}`)
    .then(response => response.data)
    .then(movie => {
      return Movie.create(movie)
    })
    .then(movie => res.json(movie))
    .catch(next);
});

module.exports = router;