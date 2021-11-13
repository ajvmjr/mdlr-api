import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default {
  async auth(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
      const data = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = data.user.id;
      next();
    } catch (e) {
      res.sendStatus(401);
    }
  },
};
