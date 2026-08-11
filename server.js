const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Relay form submissions to Web3Forms server-side
// (browser submissions from herokuapp.com are TLD-blocked; server-to-server is not)
app.post('/api/contact', async (req, res) => {
  try {
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(req.body),
    });
    const j = await r.json();
    res.status(r.ok ? 200 : r.status).json(j);
  } catch (e) {
    res.status(502).json({ success: false, message: 'Relay failed: ' + e.message });
  }
});

// Serve the whole project statically
app.use(express.static(__dirname, { extensions: ['html'] }));

// Home → the magazine site
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Modalina.dc.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Modalina running on port ' + port));
