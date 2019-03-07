const express = require('express');
const path = require('path');
const db = require('./db.js');

const app = express();
const PORT = process.env.PORT || 8081;


app.use('/:id', express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.delete('/delete/:id', (req, res) => {
  db.deletePAV(req.params.id)
    .then(() => {
      res.end('deleted');
    });
});

app.update('/update/:id', (req, res) => {
  db.deletePAV(req.params.id, req.body)
    .then(() => {
      res.end('updated');
    });
});

app.post('/post/', (req, res) => {
  db.postPAV(req.body)
    .then(() => {
      res.end('posted');
    })
});


app.get('/api/sizechart', (req, res) => {
  db.fetchChartFromDB()
    .then(chart => res.send(chart));
});

app.get('/api/pavs/:id', (req, res) => {
  console.log(req.params.id);
  db.fetchFourRandomPAVsFromDB(req.params.id)
    .then(pavs => res.send(pavs));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(path.join(__dirname, '../public'));
});

module.exports = app;
