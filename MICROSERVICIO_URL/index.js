const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 2003;

// Ruta para consumir la API de VirusTotal
app.get('/scan-url', async (req, res) => {
  const apiUrl = 'https://www.virustotal.com/api/v3/urls';
  const apiKey = 'c064ec90cfe3c9399b74c340305666dafff24737fd6ec09bc512dd5bf6230362';

  try {
    const response = await axios.post(apiUrl, { url: '8.8.8.8' }, {
      headers: {
        'x-apikey': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/', (req, res) => {
  res.redirect('/scan-url');
});

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Servidor escuchando en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

