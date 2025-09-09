require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const speechService = require('./services/speechService');
const openaiService = require('./services/openaiService');
const healthService = require('./services/healthService');
const gerarProntuario = require('./prontuario/gerarProntuario');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

app.post('/transcribe', upload.single('audio'), async (req, res) => {
  const audioPath = path.join(__dirname, req.file.path);
  const transcription = await speechService.transcribeAudio(audioPath);
  fs.unlinkSync(audioPath);
  res.json(transcription);
});

app.post('/summarize', async (req, res) => {
  const { text } = req.body;
  const summary = await openaiService.summarizeText(text);
  res.json(summary);
});

app.post('/extract', async (req, res) => {
  const { text } = req.body;
  const entities = await healthService.extractMedicalEntities(text);
  res.json(entities);
});

app.post('/prontuario', async (req, res) => {
  const { relato, observacoes, diagnostico, medicamentos } = req.body;
  const prontuario = gerarProntuario.gerarProntuario({ relato, observacoes, diagnostico, medicamentos });
  res.json(prontuario);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
