// healthService.js

const healthCheck = (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    healthCheck
};