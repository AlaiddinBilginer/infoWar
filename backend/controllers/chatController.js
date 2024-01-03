const { askChatGPT } = require('../modules/chatbot');

const getChatResponse = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatbotResponse = await askChatGPT(userMessage);
    res.json({ response: chatbotResponse });
  } catch (error) {
    console.error('Chatbot hatası: ' + error);
    res.status(500).json({ error: 'İç Sunucu Hatası' });
  }
};

module.exports = { getChatResponse };
