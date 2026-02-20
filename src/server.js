const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Health check endpoint (Important for ALB)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Application is healthy' });
});

// App version route (important for blue-green demo)
app.get('/version', (req, res) => {
    res.json({ version: "Green Version 2.0" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
