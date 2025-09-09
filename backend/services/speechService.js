// speechService.js
// Envia áudio para Azure Speech e retorna transcrição com diarização

const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

async function transcribeAudio(filePath) {
  const audio = fs.readFileSync(filePath);
  const response = await axios.post(
    'https://eastus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR',
    audio,
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SPEECH_KEY,
        'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'X-DiarizationEnabled': 'true'
      }
    }
  );
  return response.data;
}

module.exports = { transcribeAudio };
