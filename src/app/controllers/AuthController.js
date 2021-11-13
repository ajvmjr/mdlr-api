import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import repository from '../repositories/UsersRepository';

dotenv.config();

export default {
  async auth(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: 'Informe e-mail e senha.' });
    }

    const user = await repository.findByEmail(email);

    if (!user) {
      return res.sendStatus(401);
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' });

    delete user.password;

    res.status(200).json({
      ...user,
      token,
    });
  },
};
