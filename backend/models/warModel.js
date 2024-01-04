const mongoose = require('mongoose');
const ModelFactory = require('./modelFactory');

const WarSchema = new mongoose.Schema({
  war_id: String,
  war_info: String,
  war_name: String,
  starting_date: String,
  is_it_over: Boolean,
  war_image: String,
});

const War = ModelFactory.createModel('wars', WarSchema);

module.exports = War;
