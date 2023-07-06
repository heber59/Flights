const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');
const Flight = require('./Flight');

const Schedule = sequelize.define(
  'Schedule',
  {
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'schedules',
  }
);

module.exports = Schedule;
