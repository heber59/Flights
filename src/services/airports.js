const pool = require('../lib/db');

const getAllAirports = async () => {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM airports');
  client.release();

  return result.rows;
};

const createAirport = async ({ name, country, city }) => {
  const client = await pool.connect();

  const airportQuery = 'INSERT INTO airports (name, country, city) VALUES ($1, $2, $3)';
  const airportValues = [name, country, city];
  const airportResult = await client.query(airportQuery, airportValues);
  console.log({ airportResult });
  client.release();
  console.log({ airportResult });

  return airportResult.rows;
};
module.exports = { getAllAirports, createAirport };
