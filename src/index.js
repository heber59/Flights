// Express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// // Connect database
// if (module.parent == null) {
//   const mongooseLib = new MongooseLib();
//   mongooseLib.connect();
// }

// Middlewares
app.use(cors('*'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

// Routes
routes(app);

if (module.parent == null) {
  // Server
  app.listen(3000, () => {
    console.log('Listening in http://localhost:3000');
  });
}

module.exports = app;
