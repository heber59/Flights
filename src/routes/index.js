const flight = require('./flights');
const passenger = require('./passengers');
const airport = require('./airports');

const routes = (server) => {
  server.use('/api/flights', flight);
  server.use('/api/passengers', passenger);
  server.use('/api/airports', airport);
};

module.exports = routes;
