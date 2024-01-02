const mongoose = require('mongoose');

const PresidentSchema = new mongoose.Schema({
  president_id: String,
  first_name: String,
  last_name: String,
  age: Number,
  president_info: String,
  president_image: String,
});

const President = mongoose.model('presidents', PresidentSchema);

module.exports = President;
