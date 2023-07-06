const express = require('express');

const service = require('../services/flights');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await service.getAllFlights();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const data = await service.createFlight(body);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
