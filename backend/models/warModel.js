const mongoose = require('mongoose');

const WarSchema = new mongoose.Schema({
  war_id: String,
  war_info: String,
  war_name: String,
  starting_date: String,
  is_it_over: Boolean,
  war_image: String,
});

const War = mongoose.model('wars', WarSchema);

module.exports = War;
