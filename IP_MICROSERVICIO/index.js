const express = require('express');
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = 2001;

// Swagger configuration
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route to fetch IP information
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://ipapi.co/8.8.8.8/json/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch IP information' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
