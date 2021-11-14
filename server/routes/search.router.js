// const { default: axios } = require('axios');
// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool')

// router.get('/', (req,res) => {
//   axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.MOVIE_API_KEY}`)
// }).then((response) => {
//   console.log(`API get res ->`, response.data);
//   res.send(response.data);
// }) .catch((err) => {
//   console.log(`Error in get ->`, err);
// });