const pool = require('../lib/db');

const getAllFlights = async () => {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM flights JOIN schedules ON flights.flight_id = schedules.flight_id');
  client.release();

  return result.rows;
};

const createFlight = async ({ number, origin, destination, start_date: departure_time, end_date: arrival_time }) => {
  const client = await pool.connect();

  const flightQuery = 'INSERT INTO flights (number, origin, destination) VALUES ($1, $2, $3) RETURNING flight_id';
  const flightValues = [number, origin, destination];
  const flightResult = await client.query(flightQuery, flightValues);

  const flightId = flightResult.rows[0].flight_id;

  const scheduleQuery = 'INSERT INTO schedules (flight_id, departure_time, arrival_time) VALUES ($1, $2, $3)';
  const scheduleValues = [flightId, departure_time, arrival_time];
  await client.query(scheduleQuery, scheduleValues);

  client.release();

  return flightResult.rows;
};
module.exports = { getAllFlights, createFlight };
