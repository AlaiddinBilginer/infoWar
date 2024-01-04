const express = require('express');
const { getChatResponse } = require('../controllers/chatController');

const router = express.Router();

router.post('/chat', getChatResponse);

module.exports = router;
