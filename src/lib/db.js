const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'joka',
  host: 'dpg-ci9oa998g3n2q3qo75g0-a.oregon-postgres.render.com',
  database: 'flights_o8a9',
  password: '7Z5uAsdKlqZ11QDcrSL0vGV8NoJmSxDB',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
