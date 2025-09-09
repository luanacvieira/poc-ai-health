// healthService.js
// Envia texto para Text Analytics for Health e retorna entidades médicas

const axios = require('axios');
require('dotenv').config();

async function extractMedicalEntities(text) {
  const response = await axios.post(
    `https://${process.env.LANGUAGE_RESOURCE}.cognitiveservices.azure.com/text/analytics/v3.1-preview.1/entities/health`,
    { documents: [{ id: '1', language: 'pt', text }] },
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.LANGUAGE_KEY,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.documents[0].entities;
}

module.exports = { extractMedicalEntities };
