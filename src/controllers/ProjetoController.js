const Projetos = require('../models/ProjetoData');

module.exports = {
  async read(request, response) {
    const projetoList = await Projetos.find();
    return response.json(projetoList);
  },

  async readId(request, response) {
    const { id } = request.params;
    const projetoList = await Projetos.findOne({ _id: id });
    return response.json(projetoList);
  },

  async edit(request, response) {
    const { id } = request.params;
    const projeto = await Projetos.findOne({ _id: id });
    const { nome, valorTotal, categoria, servicos, custo } = request.body;

    if (!nome || !valorTotal) {
      return response
        .status(400)
        .json({ err: 'Não é possível cadastrar campos vazios!!' });
    }

    projeto.nome = nome;
    projeto.valorTotal = valorTotal;
    projeto.categoria.id = categoria.id;
    projeto.categoria.nome = categoria.nome;
    projeto.servicos = [...servicos];
    projeto.custo = custo;

    await projeto.save();
    return response.json(projeto);
  },
  async create(request, response) {
    const { nome, valorTotal, categoria } = request.body;

    if (!nome || !valorTotal) {
      return response
        .status(400)
        .json({ err: 'Não é possível cadastrar campos vazios!!' });
    }

    const ProjetosCreated = await Projetos.create({
      nome: nome,
      valorTotal: valorTotal,
      categoria: {
        id: categoria.id,
        nome: categoria.nome,
      },
      custo: 0,
    });

    return response.json(ProjetosCreated);
  },

  async delete(request, response) {
    const { id } = request.params;
    const projetoDeleted = await Projetos.findOneAndDelete({ _id: id });
    if (projetoDeleted) {
      return response.json(projetoDeleted);
    }
    return response
      .status(401)
      .json({ error: 'Não foi encontrado o registro para deletar!!!' });
  },
};
