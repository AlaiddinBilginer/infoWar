const express = require('express');
const cors = require('cors');
const Facade = require('./facade/Facade');
const connectDB = require('./config/database')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/countries', (req, res) => Facade.getCountries(req, res));
app.get('/presidents', (req, res) => Facade.getPresidents(req, res));
app.get('/statistics', (req, res) => Facade.getStatistics(req, res));
app.get('/wars', (req, res) => Facade.getWars(req, res));
app.post('/chat', (req, res) => Facade.getChatResponse(req, res));

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
