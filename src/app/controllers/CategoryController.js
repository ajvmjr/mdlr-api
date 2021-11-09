const repository = require('../repositories/CategoriesRepository');

module.exports = {
  async index(req, res) {
    const { orderBy } = req.query;
    const categories = await repository.findAll(orderBy);
    res.status(200).json(categories);
  },

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(404).json({ msg: 'Nome da categoria é obrigatório.' });
    }

    const newCategory = await repository.create({ name });

    res.status(201).json(newCategory);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(404).json({ msg: 'Nome da categoria é obrigatório.' });
    }

    const contact = repository.update(id, { name });

    res.status(200).json(contact);
  },

  async delete(req, res) {
    const { id } = req.params;

    await repository.delete(id);

    res.sendStatus(204);
  },
};
