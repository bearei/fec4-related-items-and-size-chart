const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/8080';
var autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connect(mongoUri, {useNewUrlParser: true});

// db.mongoConnect = () => {
// mongoose.Promise = global.Promise
// mongoose.connect(mongoUri, )
// .then(() => {
// console.log('mongoDB is connected...')
// })
// .catch((err) => {
// throw err
// })
// }


module.exports = db;