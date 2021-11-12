const bcrypt = require('bcryptjs');
const repository = require('../repositories/UsersRepository');

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Informe nome, email e senha.' });
    }

    const emailIsAlreadyTaken = await repository.findByEmail(email);

    if (emailIsAlreadyTaken) {
      return res.status(400).json({ msg: 'Email já existente.' });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const createdUser = await repository.create({ name, email, password: encryptedPassword });

    res.status(201).json(createdUser);
  },
};
