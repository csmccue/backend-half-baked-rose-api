const { Router } = require('express');
const Episode = require('../models/Episode');

module.exports = Router()
  .get('/episodes', async (req, res) => {
    const eps = await Episode.getAll();
    const filtered = eps.map(({ 
      id,
      title,
      season,
      number,  
    }) =>
      ({
        id,
        title,
        season,
        number
      }));
    res.json(filtered);
  })
;
