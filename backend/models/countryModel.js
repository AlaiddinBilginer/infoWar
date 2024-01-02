const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  country_id: String,
  country_info: String,
  country_name: String,
  establishment: String,
  population: String,
  region: String,
  country_image: String,
  country_president_id: String,
});

const Country = mongoose.model('countries', CountrySchema);

module.exports = Country;
