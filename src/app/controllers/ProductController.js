const repository = require('../repositories/ProductsRepository');

module.exports = {
  async index(req, res) {
    const { orderBy } = req.query;

    const products = await repository.findAll(orderBy);

    res.status(200).json(products);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { name, price, category_id } = req.body;

    if (!name || !filename || !price || !category_id) {
      return res.status(400).json({ msg: 'Informe o nome, categoria, preço e imagem do produto.' });
    }

    const product = await repository.create({
      name, filename, price, category_id,
    });

    return res.status(201).json(product);
  },

  async update(req, res) {
    const { filename } = req.file;
    const { id } = req.params;
    const { name, price, category_id } = req.body;

    if (!name || !filename || !price || !category_id) {
      return res.status(400).json({ msg: 'Informe o nome, categoria, preço e imagem do produto.' });
    }

    const updatedProduct = await repository.update(id, {
      name, filename, price, category_id,
    });

    res.status(200).json(updatedProduct);
  },

  async delete(req, res) {
    const { id } = req.params;

    await repository.delete(id);

    res.sendStatus(204);
  },
};
