const mongoose = require('mongoose');

const StatisticsSchema = new mongoose.Schema({
  statistics_id: String,
  child_death: Number,
  soldier_death: Number,
  adult_death: Number,
  injured: Number,
  statistics_country_id: String,
  statistics_war_id: String,
});

const Statistics = mongoose.model('statistics', StatisticsSchema);

module.exports = Statistics;