const express = require('express');

const service = require('../services/airports');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await service.getAllAirports();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const data = await service.createAirport(body);
    console.log({ data });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
