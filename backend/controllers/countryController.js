const Country = require('../models/countryModel');

const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    console.error('Veri getirme hatası: ' + error);
    res.status(500).json({ error: 'İç Sunucu Hatası' });
  }
};

module.exports = { getCountries };
