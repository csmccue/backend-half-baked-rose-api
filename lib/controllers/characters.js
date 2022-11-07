const { Router } = require('express');
const { Character } = require('../models/Character');

module.exports = Router()
  .get('/', async (req, res) => {
    const chars = await Character.getAll();
    const filtered = chars.map(({
      id,
      first_name,
      last_name,
      quotes
    }) => ({     
      id,
      first_name,
      last_name,
      quotes
    }));
    res.json(filtered);
  })
;

