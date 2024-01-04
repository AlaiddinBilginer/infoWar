const mongoose = require('mongoose');

class ModelFactory {
  createModel(name, schema) {
    return mongoose.model(name, schema);
  }
}

const modelFactory = new ModelFactory();
Object.freeze(modelFactory);

module.exports = modelFactory;
