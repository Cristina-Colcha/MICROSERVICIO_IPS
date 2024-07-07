const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

let fetch;
(async () => {
  ({ default: fetch } = await import('node-fetch'));
})();

const app = express();
const port = 2002;

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'VirusTotal API Microservice',
      version: '1.0.0',
      description: 'Microservice to fetch information from VirusTotal API',
    },
  },
  apis: ['index.js'], // Specify the file where you define your routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Endpoint to fetch IP information from VirusTotal
app.get('/getIPInfo', async (req, res) => {
  const virusTotalAPI = 'https://www.virustotal.com/api/v3/ip_addresses/8.8.8.8';
  const apiKey = 'c064ec90cfe3c9399b74c340305666dafff24737fd6ec09bc512dd5bf6230362';

  const options = {
    method: 'GET',
    headers: {
      'x-apikey': apiKey,
      accept: 'application/json',
    },
  };

  try {
    const response = await fetch(virusTotalAPI, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from VirusTotal API:', error);
    res.status(500).json({ error: 'Failed to fetch data from VirusTotal API' });
  }
});

// Serve Swagger UI on root
app.get('/', (req, res) => {
  res.redirect('/getIPInfo');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

