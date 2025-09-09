// openaiService.js

const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/';

const generateText = async (prompt) => {
    try {
        const response = await axios.post(`${OPENAI_API_URL}completions`, {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 100,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating text from OpenAI:', error);
        throw error;
    }
};

module.exports = {
    generateText,
};