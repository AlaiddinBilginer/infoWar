const mongoose = require('mongoose');
const ModelFactory = require('./modelFactory');

const PresidentSchema = new mongoose.Schema({
  president_id: String,
  first_name: String,
  last_name: String,
  age: Number,
  president_info: String,
  president_image: String,
});

const President = ModelFactory.createModel('presidents', PresidentSchema);

module.exports = President;
