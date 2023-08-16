const mongoose = require('mongoose');

const ProjetosDataSchema = new mongoose.Schema({
  nome: String,
  valorTotal: String,
  categoria: {
    id: String,
    nome: String,
  },
  custo: Number,
  servicos: Array,
});

module.exports = mongoose.model('Projetos', ProjetosDataSchema);
