const express = require('express');
const path = require('path');
const db = require('../database-mongodb/index.js');

const app = express();
const PORT = 3002;


app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/sizechart', (req, res) => {
  db.fetchChartFromDB()
    .then(chart => res.send(chart));
});

app.get('/api/pavs', (req, res) => {
  db.fetchFourRandomPAVsFromDB()
    .then(pavs => res.send(pavs));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(path.join(__dirname, '/../client/dist'));
});

module.exports = app;
