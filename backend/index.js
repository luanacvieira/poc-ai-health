const express = require('express');
const bodyParser = require('body-parser');
const transcribeRoutes = require('./routes/transcribe');
const healthService = require('./services/healthService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/transcribe', transcribeRoutes);

// Health check route
app.get('/health', healthService.checkHealth);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});