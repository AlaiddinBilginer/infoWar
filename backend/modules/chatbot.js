const axios = require('axios');

const openaiApiKey = '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';

const askChatGPT = async (message) => {
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
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('ChatGPT API hatası: ' + error);
    return 'Üzgünüm, bir hata oluştu.';
  }
};

module.exports = { askChatGPT };
