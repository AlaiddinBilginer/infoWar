const express = require('express');
const { getWars } = require('../controllers/warController');

const router = express.Router();

router.get('/wars', getWars);

module.exports = router;
