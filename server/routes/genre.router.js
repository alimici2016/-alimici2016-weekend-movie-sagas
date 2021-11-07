const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

router.get('/details', (req, res) => {
  let query = `
  SELECT genres.name FROM movies 
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  WHERE movies.id = $1;`;
  pool.query(query, [req.query.id])
    .then((result) => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch((err) => {
      console.log('error in get', err)
    })
});

module.exports = router;