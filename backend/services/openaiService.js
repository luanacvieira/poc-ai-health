// openaiService.js
// Envia transcrição para Azure OpenAI e retorna resumo objetivo

const axios = require('axios');
require('dotenv').config();

async function summarizeText(text) {
  const response = await axios.post(
    `https://${process.env.OPENAI_RESOURCE}.openai.azure.com/openai/deployments/${process.env.OPENAI_DEPLOYMENT}/chat/completions?api-version=2023-03-15-preview`,
    {
      messages: [{ role: 'user', content: `Resuma a seguinte consulta médica:
${text}` }],
      temperature: 0.5,
      max_tokens: 500
    },
    {
      headers: {
        'api-key': process.env.OPENAI_KEY,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.choices[0].message.content;
}

module.exports = { summarizeText };
