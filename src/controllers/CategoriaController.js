const Categorias = require('../models/CategoriaData');

module.exports = {
  async read(request, response) {
    const categoriaList = await Categorias.find();
    return response.json(categoriaList);
  },

  async create(request, response) {
    const { nome } = request.body;

    if (!nome) {
      return response
        .status(400)
        .json({ err: 'Não é possível cadastrar campos vazios!!' });
    }

    const CategoriasCreated = await Categorias.create({
      nome: nome,
    });

    return response.json(CategoriasCreated);
  },

  async delete(request, response) {
    const { id } = request.params;
    const categoriaDeleted = await Categorias.findOneAndDelete({ _id: id });
    if (categoriaDeleted) {
      return response.json(categoriaDeleted);
    }
    return response
      .status(401)
      .json({ error: 'Não foi encontrado o registro para deletar!!!' });
  },
};
