const Statistics = require('../models/statisticsModel');

const getStatistics = async (req, res) => {
  try {
    const statistics = await Statistics.find();
    res.json(statistics);
  } catch (error) {
    console.error('Veri getirme hatası: ' + error);
    res.status(500).json({ error: 'İç Sunucu Hatası' });
  }
};

module.exports = { getStatistics };
