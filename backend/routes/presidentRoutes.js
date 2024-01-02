const express = require('express');
const { getPresidents } = require('../controllers/presidentController');

const router = express.Router();

router.get('/presidents', getPresidents);

module.exports = router;
