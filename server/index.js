require('newrelic');
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const app = express();

// const redis = require('redis');
// const client = redis.createClient();

const PORT = process.env.PORT || 3010;

app.use('/shopping/:itemId', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../loader')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  '/api/sizechart',
  proxy({
    target: 'http://18.224.184.136:3008',
    changeOrigin: true
  })
);
app.use(
  '/api/pavs/:itemId',
  proxy({
    target: 'http://18.224.184.136:3008',
    changeOrigin: true
  })
)
app.use(
  '/api/post',
  proxy({
    target: 'http://18.224.184.136:3008',
    changeOrigin: true
  })
)

app.use(
  '/delete/:itemId',
  proxy({
    target: 'http://18.224.184.136:3008',
    changeOrigin: true
  })
)
app.use(
  '/update/:itemId',
  proxy({
    target: 'http://18.224.184.136:3008',
    changeOrigin: true
  })
)

// app.delete('/delete/:itemId', (req, res) => {
//   db.deletePAV(req.params.itemId)
//     .then(() => {
//       res.end('deleted');
//     });
// });

// app.put('/update/:itemId', (req, res) => {
//   db.deletePAV(req.params.itemId, req.body)
//     .then(() => {
//       res.end('updated');
//     });
// });

// app.post('/post', (req, res) => {
//   db.postPAV(req.body)
//     .then(() => {
//       res.end('posted');
//     })
// });


// app.get('/api/sizechart', (req, res) => {
//   db.fetchChartFromDB()
//     .then(chart => res.send(chart));
// });

// app.get('/api/pavs/:itemId', (req, res) => {
//   db.fetchFourRandomPAVsFromDB(req.params.itemId)
//     .then(pavs => res.send(pavs));
// });

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(path.join(__dirname, '../public'));
});

module.exports = app;
