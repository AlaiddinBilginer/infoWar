const War = require('../models/warModel');

const getWars = async (req, res) => {
  try {
    const wars = await War.find();
    res.json(wars);
  } catch (error) {
    console.error('Veri getirme hatası: ' + error);
    res.status(500).json({ error: 'İç Sunucu Hatası' });
  }
};

module.exports = { getWars };
