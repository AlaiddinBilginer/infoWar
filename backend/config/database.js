const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://infowar:EQepw23Kikq43ox0@InfowarStats.9kajgq4.mongodb.net/InfowarStats');
    console.log('MongoDB bağlantısı başarıyla gerçekleştirildi');
  } catch (err) {
    console.error('MongoDB bağlantı hatası: ' + err);
  }
};

module.exports = connectDB;
