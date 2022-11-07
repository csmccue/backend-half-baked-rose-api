const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router()
  .get('/', async (req, res) => {
    const eps = await Episode.getAll();
    const filtered = eps.map(({ 
      id,
      title,
      season,
      number,  
      quotes
    }) =>
      ({
        id,
        title,
        season,
        number,
        quotes
      }));
    res.json(filtered);
  })
;
