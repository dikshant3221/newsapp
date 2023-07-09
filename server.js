const express = require('express');
const app = express();
const port = 4001;
const fs = require('fs');


// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/data', (req, res) => {
  const data = fs.readFileSync('server.json', 'utf8');
  const jsonData = JSON.parse(data);
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
