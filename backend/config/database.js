const mongoose = require('mongoose');

class Database {
  constructor() {
    if (!Database.instance) {
      this.connect();
      Database.instance = this;
    }
    return Database.instance;
  }

  connect() {
    mongoose.connect('mongodb+srv://infowar:EQepw23Kikq43ox0@InfowarStats.9kajgq4.mongodb.net/InfowarStats', {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB bağlantısı başarıyla gerçekleştirildi');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB bağlantı hatası: ' + err);
    });
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;
