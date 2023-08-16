const mongoose = require('mongoose');

const CategoriaDataSchema = new mongoose.Schema({
  nome: String,
});

module.exports = mongoose.model('Categorias', CategoriaDataSchema);
