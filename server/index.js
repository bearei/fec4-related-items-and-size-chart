require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db.js');
const app = express();
// const redis = require('redis');
// const client = redis.createClient();

const PORT = process.env.PORT || 8081;


app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.put('/update/:id', (req, res) => {
  db.deletePAV(req.params.id, req.body)
    .then(() => {
      res.end('updated');
    });
});

app.post('/post', (req, res) => {
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

// client.on('error', function(err) {
//   console.log('error' + err);
// });
// const getCache = (req, res) => {
//   client.get(req.params.id, (err, result) => {
//     if (result) {
//       res.send(result);
//     } else {
//       db.fetchFourRandomPAVsFromDB(req.params.id)
//         .then(pavs => {
//           client.setex(req.params.id, 60, JSON.stringify(pavs));
//           res.send(pavs)
//         });
//     }
//   })
// }
// app.get('/api/pavs/:id', getCache);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(path.join(__dirname, '../public'));
});

module.exports = app;
