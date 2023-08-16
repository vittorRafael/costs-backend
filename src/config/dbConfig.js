//
const mongoose = require('mongoose');
const dbConfig =
  'mongodb+srv://rafael:usuario@cluster0.sxzcuy8.mongodb.net/costs?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
