const countryController = require('../controllers/countryController');
const presidentController = require('../controllers/presidentController');
const statisticsController = require('../controllers/statisticsController');
const warController = require('../controllers/warController');
const chatController = require('../controllers/chatController');

class Facade {
  constructor() {
    this.countryController = countryController;
    this.presidentController = presidentController;
    this.statisticsController = statisticsController;
    this.warController = warController;
    this.chatController = chatController;
  }

  async getCountries(req, res) {
    return await this.countryController.getCountries(req, res);
  }

  async getPresidents(req, res) {
    return await this.presidentController.getPresidents(req, res);
  }

  async getStatistics(req, res) {
    return await this.statisticsController.getStatistics(req, res);
  }

  async getWars(req, res) {
    return await this.warController.getWars(req, res);
  }

  async getChatResponse(req, res) {
    return await this.chatController.getChatResponse(req, res);
  }
}

const facade = new Facade();
Object.freeze(facade);

module.exports = facade;
