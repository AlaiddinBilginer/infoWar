const axios = require('axios');

class Chatbot {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async ask(message) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turkish',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            {
              role: 'user',
              content: message,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('ChatGPT API hatası: ' + error);
      return 'Üzgünüm, bir hata oluştu.';
    }
  }
}

const chatGPTApiKey = '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';
const chatbot = new Chatbot(chatGPTApiKey);

module.exports = chatbot;
