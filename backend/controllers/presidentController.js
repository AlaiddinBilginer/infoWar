const President = require('../models/presidentModel');

const getPresidents = async (req, res) => {
  try {
    const presidents = await President.find();
    res.json(presidents);
  } catch (error) {
    console.error('Veri getirme hatası: ' + error);
    res.status(500).json({ error: 'İç Sunucu Hatası' });
  }
};

module.exports = { getPresidents };