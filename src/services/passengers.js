const pool = require('../lib/db');

const getAllPassengers = async () => {
  const client = await pool.connect();
  const result = await client.query('SELECT * FROM passengers');
  client.release();

  return result.rows;
};

const createPassenger = async ({
  identification,
  user,
  password,
  name,
  country,
  city,
  address,
  postal_code,
  phone,
  email,
}) => {
  const client = await pool.connect();

  const passengerQuery =
    'INSERT INTO passengers (identification, "user", password, name, country, city, address, postal_code, phone, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  const passengerValues = [identification, user, password, name, country, city, address, postal_code, phone, email];
  const passengerResult = await client.query(passengerQuery, passengerValues);

  client.release();

  return passengerResult;
};

module.exports = { getAllPassengers, createPassenger };
