// routes/transcribe.js

const express = require('express');
const router = express.Router();
const speechService = require('../services/speechService');

// Route for transcribing audio
router.post('/transcribe', async (req, res) => {
    try {
        const audioData = req.body.audioData;
        const transcription = await speechService.transcribeAudio(audioData);
        res.status(200).json({ transcription });
    } catch (error) {
        res.status(500).json({ error: 'Transcription failed' });
    }
});

// Additional routes can be added here

module.exports = router;