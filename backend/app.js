const express = require('express');
const cors = require('cors');

const countryRoutes = require('./routes/countryRoutes');
const presidentRoutes = require('./routes/presidentRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
const warRoutes = require('./routes/warRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connectDB = require('./config/database');

app.use('/', countryRoutes);
app.use('/', presidentRoutes);
app.use('/', statisticsRoutes);
app.use('/', warRoutes);
app.use('/', chatRoutes);

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
